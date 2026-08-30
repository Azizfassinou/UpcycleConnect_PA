# 🚀 GUIDE ULTIME LIVE-CODING & SOUTENANCE — NO MORE WASTE

Ce fichier est votre guide étape par étape pour modifier le code en direct lors de votre examen (du Backend au Frontend).

---

## 📌 QUESTION 1 : Ajouter un rôle (`Livreur` ou `Partenaire`) + Middleware + Route + Vue UI

### 1️⃣ Étape 1 (Backend - Middleware)
Créer le fichier `backend/internal/middlewares/auth_partner.go` :
```go
package middlewares

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func PartnerOnly() gin.HandlerFunc {
	return func(c *gin.Context) {
		role, exists := c.Get("user_role")
		if !exists || (role != "partner" && role != "livreur" && role != "admin") {
			c.JSON(http.StatusForbidden, gin.H{"error": "Accès réservé aux livreurs / partenaires"})
			c.Abort()
			return
		}
		c.Next()
	}
}
```

### 2️⃣ Étape 2 (Backend - Handler)
Créer le fichier `backend/internal/handlers/partner_handler.go` :
```go
package handlers

import (
	"net/http"
	"github.com/FASSINOU/no-more-waste-api/internal/database"
	"github.com/FASSINOU/no-more-waste-api/internal/models"
	"github.com/gin-gonic/gin"
)

func GetPartnerDashboardData(c *gin.Context) {
	var deliveries []models.Delivery
	database.DB.Preload("Order").Find(&deliveries)

	c.JSON(http.StatusOK, gin.H{
		"message":    "Bienvenue sur l'espace Livreur",
		"deliveries": deliveries,
	})
}
```

### 3️⃣ Étape 3 (Backend - Déclaration de Route dans `backend/cmd/server/main.go`)
Ouvrir `backend/cmd/server/main.go` et ajouter :
```go
	partnerGroup := r.Group("/partner")
	partnerGroup.Use(middlewares.AuthMiddleware(), middlewares.PartnerOnly())
	{
		partnerGroup.GET("/dashboard", handlers.GetPartnerDashboardData)
	}
```

### 4️⃣ Étape 4 (Frontend - Vue UI)
Créer le fichier `Frontend/src/views/PartnerDashboard.vue` :
```vue
<template>
  <div class="dashboard-container">
    <h1>🚚 Espace Livreur / Partenaire</h1>
    <p v-if="msg" class="alert alert-info">{{ msg }}</p>

    <div class="table-container" v-if="deliveries.length > 0">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinataire</th>
            <th>Adresse</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in deliveries" :key="d.ID">
            <td>#{{ d.ID }}</td>
            <td>{{ d.recipient_name }}</td>
            <td>{{ d.recipient_address }}</td>
            <td><span class="badge">{{ d.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="empty-state">Aucune livraison assignée pour le moment</div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'PartnerDashboard',
  data() {
    return { deliveries: [], msg: '' }
  },
  async mounted() {
    try {
      const res = await api.get('/partner/dashboard')
      this.deliveries = res.data.deliveries || []
      this.msg = res.data.message
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
```

### 5️⃣ Étape 5 (Frontend - Routeur & Navigation)
- Dans `Frontend/src/router/index.js`, ajouter l'import et la route :
  ```js
  import PartnerDashboard from '../views/PartnerDashboard.vue'
  // Dans routes:
  { path: '/partner-dashboard', component: PartnerDashboard, meta: { requiresAuth: true } }
  ```
- Dans `Frontend/src/components/Navbar.vue`, ajouter le bouton :
  ```html
  <router-link v-if="userRole === 'partner' || userRole === 'livreur'" to="/partner-dashboard" class="nav-link">
    Espace Livreur
  </router-link>
  ```

---

## 📌 QUESTION 2 : Ajouter un nouveau champ dans une entité (ex: `VehicleType` dans `Volunteer`)

### 1️⃣ Étape 1 (Backend - Modèle `backend/internal/models/volunteer.go`)
```go
type Volunteer struct {
	gorm.Model
	ZoneArea     string `json:"zone_area"`
	Availability string `json:"availability"`
	Vehicle      bool   `json:"vehicle"`
	VehicleType  string `json:"vehicle_type"` // 👈 Nouveau champ
}
```
*Note : Grâce à GORM AutoMigrate, la colonne SQLite est créée automatiquement au redémarrage !*

### 2️⃣ Étape 2 (Backend - Handler Input `backend/internal/handlers/volunteer_handler.go`)
```go
type RegisterVolunteerInput struct {
	// ...
	VehicleType string `json:"vehicle_type"`
}
```

### 3️⃣ Étape 3 (Frontend - Formulaire & State Vue.js)

1. Dans le `<script>` de `StaffDashboard.vue` / `AdminDashboard.vue`, ajouter `vehicle_type: ''` dans l'objet `newVolunteer` de `data()` :
```javascript
newVolunteer: { 
  firstname: '', 
  lastname: '', 
  email: '', 
  password: '', 
  zone_area: '', 
  availability: '', 
  vehicle: false,
  vehicle_type: '' // 👈 RENSEIGNER ICI
}
```

2. Dans le `<template>`, utiliser `newVolunteer.vehicle_type` (et NON `form.vehicle_type`) :
```html
<div class="form-group">
  <label>Type de véhicule</label>
  <select v-model="newVolunteer.vehicle_type">
    <option value="voiture">Voiture</option>
    <option value="camionnette">Camionnette</option>
    <option value="velo">Vélo / Cargo</option>
  </select>
</div>
```
```

---

## 📌 QUESTION 3 : Ajouter une route API avec filtrage (ex: Filtre Paniers par Prix Max)

### 1️⃣ Backend Handler (`backend/internal/handlers/product_handler.go`)
```go
func FilterProductsByPrice(c *gin.Context) {
	maxPrice := c.Query("max_price")
	var products []models.Product

	query := database.DB.Where("is_available = ?", true)
	if maxPrice != "" {
		query = query.Where("price <= ?", maxPrice)
	}

	query.Find(&products)
	c.JSON(http.StatusOK, products)
}
```

### 2️⃣ Backend Route (`backend/cmd/server/main.go`)
```go
clientGroup.GET("/products/filter", handlers.FilterProductsByPrice)
```

### 3️⃣ Appels Frontend (`Frontend/src/views/ClientDashboard.vue`)
```js
async filterByPrice(maxPrice) {
  const res = await api.get('/client/products/filter?max_price=' + maxPrice)
  this.products = res.data
}
```

---

## 📌 QUESTION 4 : Ajouter une action de mise à jour d'état (ex: Annuler une commande)

### 1️⃣ Backend Handler (`backend/internal/handlers/client_handler.go`)
```go
func CancelOrder(c *gin.Context) {
	id := c.Param("id")
	var order models.Order
	if err := database.DB.First(&order, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Commande introuvable"})
		return
	}
	order.Status = "CANCELLED"
	database.DB.Save(&order)
	c.JSON(http.StatusOK, gin.H{"message": "Commande annulée avec succès"})
}
```

### 2️⃣ Backend Route (`backend/cmd/server/main.go`)
```go
clientGroup.PUT("/orders/:id/cancel", handlers.CancelOrder)
```

---

## ⚡ COMMANDES RAPIDES POUR TESTER ET DÉPLOYER

### 💻 Test en Local :
```bash
# Terminal 1 - Backend Go
cd backend && go run cmd/server/main.go

# Terminal 2 - Frontend Vue 3
cd Frontend && npm run dev
```

### 🚀 Déploiement Direct sur le VPS :
```bash
git add .
git commit -m "Live coding update"
git push

# Connexion sur VPS:
cd ~/no-more-waste && git pull && docker compose up -d --build
```
