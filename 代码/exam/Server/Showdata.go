package Server

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"wyb/db"
)

func Showdata(c *gin.Context) {
	a := db.Showdata() //将showdata()获取的值 赋值给a
	//fmt.Println(a, m, d)
	fmt.Println(a)
	tohtml(c, a) //将a 返回给html

}
