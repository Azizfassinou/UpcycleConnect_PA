package handlers

import (
	"upcycleconnect_PA/backend/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetUsers(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var users []models.User
		if err := db.Find(&users).Error; err != nil {
			c.JSON(500, gin.H{"error": "Impossible de récupérer les utilisateurs"})
			return
		}
		c.JSON(200, users)
	}
}
