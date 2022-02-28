package Server

import (
	"github.com/gin-gonic/gin"
	"strconv"
	"wyb/db"
)

func changeBooktime(c *gin.Context) {
	id, err := strconv.Atoi(c.PostForm("id")) //将前端传入的数据赋值给id  (需类型转换)
	if err != nil {
		panic(err) //处理错误机制
	}
	booktime := c.PostForm("bookTime")    //将前端传入的数据赋值给booktime
	re := db.ChangeBookTime(id, booktime) //将id ,booktime 传给ChangBookTime()方法
	tohtml(c, re)                         //返回给html
}
