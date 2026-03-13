package main

import (
	"time"
	"upcycleconnect_PA/backend/models"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Bonjour les amis; on commence le PA",
		})
	})

	r.GET("admin/users", func(c *gin.Context) {
		users := []models.User{
			{ID: 1, Nom: "John Doe", Email: "user1@example.com", Role: "user", UpcyclingScore: 100, CreatedAt: time.Now()},
		}
		c.JSON(200, users)
	})

	r.Run()
}
