package models

import "time"

type User struct {
	ID             uint      `json:"id" gorm:"primaryKey"`
	Nom            string    `json:"nom"`
	Email          string    `json:"email" gorm:"unique"`
	Role           string    `json:"role"`
	UpcyclingScore int       `json:"upcycling_score"`
	CreatedAt      time.Time `json:"created_at"`
}
