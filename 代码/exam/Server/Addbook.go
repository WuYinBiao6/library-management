package Server

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"wyb/db"
)

func Addbook(c *gin.Context) {
	name := c.PostForm("bookname")        //将前端传入的数据赋值给name
	time := c.PostForm("goodShelfStatus") //将前端传入的数据赋值给time
	re := db.Add(name, time)              //将name,time 传给Add()方法
	fmt.Println(re)
	tohtml(c, re) //返回给html文件
}
