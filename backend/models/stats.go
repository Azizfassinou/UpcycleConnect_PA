package models

type DashboardStat struct {
	TotalUsers    int `json:"total_users"`
	TotalUpcycled int `json:"total_upcycled"`
	Activeads     int `json:"active_ads"`
}
