package Server

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/ugorji/go"
)

// Index 前端登入注册页面
func Index() {
	engine := gin.Default()                 //返回默认引擎
	engine.Static("/static", "view/static") //加载静态文件
	engine.LoadHTMLGlob("view/html/*")      //加载view/html/所有的html文件
	engine.Use(cors.Default())              //跨域 插件
	//登入页面
	engine.GET("/index", func(c *gin.Context) {
		//根据文件名渲染
		//加载模板是加载的路径，替换的是文件中的某个变量
		c.HTML(200, "index.html", gin.H{"title": "标题"})
	}) //触发get请求 加载html文件
	//书籍主页
	engine.GET("/Backstage", func(c *gin.Context) {
		//根据文件名渲染
		//加载模板是加载的路径，替换的是文件中的某个变量
		c.HTML(200, "Backstage.html", gin.H{"title": "标题"})
	}) //触发get请求 加载html文件
	//书籍编辑
	engine.GET("/bookSet", func(c *gin.Context) {
		//根据文件名渲染
		//加载模板是加载的路径，替换的是文件中的某个变量
		c.HTML(
			200, "bookSet.html", gin.H{"title": "标题"})
	}) //触发get请求 加载html文件
	//添加书籍页面
	engine.GET("/addBooks", func(c *gin.Context) {
		//根据文件名渲染
		//加载模板是加载的路径，替换的是文件中的某个变量
		c.HTML(200, "addBooks.html", gin.H{"title": "标题"})
	}) //触发get请求 加载html文件
	wyb := engine.Group("wyb") //创建 请求组
	{
		wyb.POST("/login", Login)               //POST>>>>登入
		wyb.POST("/register", Register)         //POST>>>>注册
		wyb.POST("/showdata", Showdata)         //POST>>>>动态展示
		wyb.POST("/addbook", Addbook)           //POST>>>>添加书籍
		wyb.POST("/delect", Delect)             //POST>>>>删除书籍
		wyb.POST("/query", Querybook)           //POST>>>>查询
		wyb.POST("/changeName", changeBookname) //POST>>>>修改书籍名称
		wyb.POST("/changeTime", changeBooktime) //POST>>>>修改书籍时间
	}
	err := engine.Run("127.0.0.1:8080") //启动端口127.0.0.1:8080
	if err != nil {
		return
	} //处理错误机制
}
func tohtml(c *gin.Context, data interface{}) { //渲染html 返回
	c.JSON(200, gin.H{
		"code": 0,
		"data": data,
	})
}
