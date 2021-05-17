define({ "api": [
  {
    "type": "post",
    "url": "/products",
    "title": "创建商品",
    "name": "CreateProduct",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"棉拖鞋\",\n    \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n    \"imageUrl\": \"https://path/to/image\",\n    \"price\": 29.9,\n    \"stock\": 10,\n    \"shopId\": 222\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product",
            "optional": false,
            "field": "data",
            "description": "<p>创建的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"data\": {\n         \"id\": 111,\n         \"name\": \"棉拖鞋\",\n         \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"price\": 29.9,\n         \"stock\": 10,\n         \"shopId\": 222\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 用户尝试创建非自己管理店铺的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ProductController.java",
    "groupTitle": "商品"
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "删除商品",
    "name": "DeleteProduct",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 权限错误（如删除非自己店铺的商品）</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 商品不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ProductController.java",
    "groupTitle": "商品"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "获取指定商品",
    "name": "GetProductById",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product",
            "optional": false,
            "field": "data",
            "description": "<p>指定id的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"id\": 111,\n         \"name\": \"棉拖鞋\",\n         \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"price\": 29.9,\n         \"stock\": 10,\n         \"shopId\": 222\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 商品未找到</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ProductController.java",
    "groupTitle": "商品"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "分页获取商品",
    "name": "GetProducts",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shopId",
            "description": "<p>店铺id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>总页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Product[]",
            "optional": false,
            "field": "data",
            "description": "<p>商品列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pageNum\": 5,\n  \"pageSize\": 20,\n  \"totalPage\": 100,\n  \"data\": [\n     {\n         \"id\": 111,\n         \"name\": \"棉拖鞋\",\n         \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"price\": 29.9,\n         \"stock\": 10,\n         \"shopId\": 222\n     },\n     {\n         ...\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ProductController.java",
    "groupTitle": "商品"
  },
  {
    "type": "patch",
    "url": "/products/:id",
    "title": "更新商品",
    "name": "UpdateProduct",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"棉拖鞋\",\n    \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n    \"imageUrl\": \"https://path/to/image\",\n    \"price\": 29.9,\n    \"stock\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product",
            "optional": false,
            "field": "data",
            "description": "<p>更新后的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"id\": 111,\n         \"name\": \"棉拖鞋\",\n         \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"price\": 29.9,\n         \"stock\": 10\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 用户尝试修改非自己管理店铺的商品</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 商品不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ProductController.java",
    "groupTitle": "商品"
  },
  {
    "type": "post",
    "url": "/shops",
    "title": "创建店铺",
    "name": "CreateShop",
    "group": "店铺",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"苹果官方旗舰店\",\n    \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n    \"imageUrl\": \"https://path/to/image\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"data\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "DELETE",
    "url": "/shops/:id",
    "title": "删除店铺",
    "name": "DeleteShop",
    "group": "店铺",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 店铺不存在</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 删除别人名下的店铺</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/shops/:id",
    "title": "获取指定店铺",
    "name": "GetShopById",
    "group": "店铺",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \"data\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not found 店铺不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/shops",
    "title": "获取当前用户所有店铺",
    "name": "GetShops",
    "group": "店铺",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>总页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Shop[]",
            "optional": false,
            "field": "data",
            "description": "<p>店铺列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pageNum\": 1,\n  \"pageSize\": 10,\n  \"totalPage\": 5,\n  \"data\": [\n     {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n     },\n     {\n         ...\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "PATCH",
    "url": "/shops/:id",
    "title": "修改店铺",
    "name": "UpdateShop",
    "group": "店铺",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>店铺ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": 222,\n    \"name\": \"苹果官方旗舰店\",\n    \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n    \"imageUrl\": \"https://path/to/image\",\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 店铺不存在</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 修改别人名下的店铺</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "post",
    "url": "/request-sms-code",
    "title": "获取验证码",
    "name": "GetCode",
    "description": "<p>向手机号发送验证码。（如有必要，须根据手机号创建新用户）</p>",
    "group": "登录与登出",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"tel\": \"13500000000\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/AuthController.java",
    "groupTitle": "登录与登出"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "登录",
    "name": "Login",
    "group": "登录与登出",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"tel\": \"13500000000\",\n    \"code\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 验证码错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/AuthController.java",
    "groupTitle": "登录与登出"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "登出",
    "name": "Logout",
    "group": "登录与登出",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/AuthController.java",
    "groupTitle": "登录与登出"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "获取当前登录状态",
    "name": "Status",
    "group": "登录与登出",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "login",
            "description": "<p>登录状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"login\": true,\n  \"user\": {\n      \"id\": 999,\n      \"name\": \"老王\",\n      \"tel\": \"13500000000\",\n      \"address\": \"广东省深圳市南山区深南大道10000\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/AuthController.java",
    "groupTitle": "登录与登出"
  },
  {
    "type": "put",
    "url": "/me",
    "title": "更新个人信息",
    "name": "UpdateProfile",
    "group": "登录与登出",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n      \"id\": 999,\n      \"name\": \"老王\",\n      \"tel\": \"13500000000\",\n      \"address\": \"广东省深圳市南山区深南大道10000\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/AuthController.java",
    "groupTitle": "登录与登出"
  },
  {
    "type": "post",
    "url": "/orders",
    "title": "下订单",
    "name": "CreateOrder",
    "group": "订单",
    "description": "<p>下一个新订单，其中所有的商品都应该来自同一店铺</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"products\": [\n    {\n        \"id\": 111,\n        \"number\": 10,\n    },\n    {\n        ...\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Order",
            "optional": false,
            "field": "data",
            "description": "<p>刚刚创建完成的订单</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"data\": {\n      \"id\": 333,\n      \"expressCompany\": null,\n      \"expressId\": null,\n      \"status\": \"pending\",\n      \"address\": \"XXX\",\n      \"shop\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n       },\n       \"products\": [\n         {\n             \"id\": 111,\n             \"name\": \"棉拖鞋\",\n             \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n             \"imageUrl\": \"https://path/to/image\",\n             \"address\": \"XXX\",\n             \"price\": 29.9,\n             \"number\": 10\n         },\n         {\n               ...\n         }\n      ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 商品不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"商品已经售完\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/OrderController.java",
    "groupTitle": "订单"
  },
  {
    "type": "DELETE",
    "url": "/orders/:id",
    "title": "删除订单",
    "name": "DeleteOrder",
    "group": "订单",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 用户删除非自己订单</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 若订单未找到</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/OrderController.java",
    "groupTitle": "订单"
  },
  {
    "type": "get",
    "url": "/orders",
    "title": "获取当前用户所有订单",
    "name": "GetOrder",
    "group": "订单",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "pending/paid/delivered/received"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>订单状态：pending 待付款 paid 已付款 delivered 物流中 received 已收货</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>总页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Order",
            "optional": false,
            "field": "data",
            "description": "<p>订单列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pageNum\": 1,\n  \"pageSize\": 10,\n  \"totalPage\": 5,\n  \"data\": [\n     {\n      \"id\": 333,\n      \"expressCompany\": null,\n      \"expressId\": null,\n      \"status\": \"pending\",\n      \"totalPrice\": 2999.9,\n      \"address\": \"XXX\",\n      \"shop\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n       },\n       \"products\": [\n         {\n             \"id\": 111,\n             \"name\": \"棉拖鞋\",\n             \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n             \"imageUrl\": \"https://path/to/image\",\n             \"address\": \"XXX\",\n             \"price\": 29.9,\n             \"number\": 10\n         },\n         {\n               ...\n         }\n      ]\n    },\n    {\n         ...\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/OrderController.java",
    "groupTitle": "订单"
  },
  {
    "type": "PATCH",
    "url": "/orders/:id",
    "title": "更新订单",
    "name": "UpdateOrder",
    "description": "<p>更新订单信息，只允许更新物流信息和签收状态</p>",
    "group": "订单",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example1:",
          "content": "{\n    \"id\": 333,\n    \"expressCompany\": \"圆通\",\n    \"expressId\": \"YTO1234\",\n}",
          "type": "json"
        },
        {
          "title": "Request-Example2:",
          "content": "{\n    \"id\": 333,\n    \"status\": \"RECEIVED\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Order",
            "optional": false,
            "field": "data",
            "description": "<p>更新后的订单</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n      \"id\": 333,\n      \"expressCompany\": null,\n      \"expressId\": null,\n      \"status\": \"pending\",\n      \"address\": \"XXX\",\n      \"shop\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n       },\n       \"products\": [\n         {\n             \"id\": 111,\n             \"name\": \"棉拖鞋\",\n             \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n             \"imageUrl\": \"https://path/to/image\",\n             \"address\": \"XXX\",\n             \"price\": 29.9,\n             \"number\": 10\n         },\n         {\n               ...\n         }\n      ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 用户修改非自己店铺的订单</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 若订单未找到</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/OrderController.java",
    "groupTitle": "订单"
  },
  {
    "type": "post",
    "url": "/cart",
    "title": "加购物车",
    "name": "AddShoppingCart",
    "description": "<p>向购物车中添加商品，每次可添加一件</p>",
    "group": "购物车",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"products\": [\n    {\n        \"id\": 111,\n    },\n    {\n        ...\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Cart",
            "optional": false,
            "field": "data",
            "description": "<p>添加商品后，购物车中来自该店铺的商品列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n      \"shop\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n       },\n       \"products\": [\n         {\n             \"id\": 111,\n             \"name\": \"棉拖鞋\",\n             \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n             \"imageUrl\": \"https://path/to/image\",\n             \"address\": \"XXX\",\n             \"price\": 29.9,\n             \"number\": 10\n         },\n         {\n               ...\n         }\n      ]\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request 用户请求有误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found 商品不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShoppingCartController.java",
    "groupTitle": "购物车"
  },
  {
    "type": "delete",
    "url": "/cart/:productId",
    "title": "移出购物车",
    "name": "DeleteShoppingCart",
    "group": "购物车",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productId",
            "description": "<p>要删除的商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Cart",
            "optional": false,
            "field": "data",
            "description": "<p>删除商品后，购物车中来自该店铺的商品列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n      \"shop\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n       },\n       \"products\": [\n         {\n             \"id\": 111,\n             \"name\": \"棉拖鞋\",\n             \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n             \"imageUrl\": \"https://path/to/image\",\n             \"address\": \"XXX\",\n             \"price\": 29.9,\n             \"number\": 10\n         },\n         {\n               ...\n         }\n      ]\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShoppingCartController.java",
    "groupTitle": "购物车"
  },
  {
    "type": "get",
    "url": "/cart",
    "title": "获取购物车中所有物品",
    "name": "GetShoppingCart",
    "group": "购物车",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页（从1开始）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>总页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Cart",
            "optional": false,
            "field": "data",
            "description": "<p>按照店铺分组的购物车商品列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pageNum\": 1,\n  \"pageSize\": 10,\n  \"totalPage\": 5,\n  \"data\": [\n    {\n      \"shop\": {\n         \"id\": 222,\n         \"name\": \"苹果官方旗舰店\",\n         \"description\": \"本店为Apple官方认可授权店，专注于iPhone、iPad、Mac等产品的销售及服务。\",\n         \"imageUrl\": \"https://path/to/image\",\n         \"ownerId\": 999\n       },\n       \"products\": [\n         {\n             \"id\": 111,\n             \"name\": \"棉拖鞋\",\n             \"details\": \"棉麻居家拖鞋，简约轻盈，舒适亲肤，高弹柔韧，质朴素雅，陪伴每一天。\",\n             \"imageUrl\": \"https://path/to/image\",\n             \"price\": 29.9,\n             \"number\": 10\n         },\n         {\n               ...\n         }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./wxshop-main/src/main/java/com/hcsp/wxshop/controller/ShoppingCartController.java",
    "groupTitle": "购物车"
  }
] });
