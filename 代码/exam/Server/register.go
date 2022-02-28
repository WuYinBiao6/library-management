package Server

import (
	"github.com/gin-gonic/gin"
	"wyb/db"
)

func Register(c *gin.Context) {
	name := c.PostForm("username")         //将前端通过ajax传入的username的值传给name
	password := c.PostForm("userpassword") //将前端通过ajax传入的password的值传给password
	db.UserRegister(c, name, password)     //将name,password 传给UserRegister()方法
	tohtml(c, 1)                           //返回给html
}
