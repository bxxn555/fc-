package api

import (
	"fmt"

	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	
	"github.com/gin-gonic/gin"
)

func fn_REST_sign_in(c *gin.Context) {
	err := ctrl_user.Fn_sign_in(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func fn_REST_check_id(c *gin.Context) {
	err := ctrl_user.Fn_check_ID(c)
	if err != nil {
		fmt.Println(err.Error())
	}
}

// core
func Get(c chan<- bool, r *gin.Engine) {
	go r.GET("/signin", fn_REST_sign_in)
	go r.GET("/checkid", fn_REST_check_id)
	c <- true
}
