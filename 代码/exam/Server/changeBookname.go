package Server

import (
	"github.com/gin-gonic/gin"
	"strconv"
	"wyb/db"
)

func changeBookname(c *gin.Context) {
	id, err := strconv.Atoi(c.PostForm("id")) //将前端传入的数据赋值给id  (需类型转换)
	if err != nil {
		panic(err)
	} //处理错误机制
	bookname := c.PostForm("bookName")   //将前端传入的数据赋值给bookname
	re := db.ChangBookName(id, bookname) //将id ,bookname 传给ChangBookName()方法
	tohtml(c, re)                        //返回给html
}
