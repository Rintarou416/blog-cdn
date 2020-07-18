/*
 * BotUI回复配置
 */
 function botuiinit() {
    var botui = new BotUI("my-botui");
botui.message.add({
  delay: 800,
  content: "Hi, 看这里👋"
}).then(function () {
  botui.message.add({
    delay: 1100,
    content: "欢迎来到 Rin404°"
  }).then(function () {
    botui.message.add({
      delay: 1100,
      content: "一个无人问津的小站~"
    }).then(function () {
      botui.action.button({
        delay: 1600,
        action: [{
          text: "然后呢？ 😃",
          value: "sure"
        }, {
          text: "少废话！ 🙄",
          value: "skip"
        }]
      }).then(function (a) {
        "sure" == a.value && sure();
        "skip" == a.value && end()
      })
    })
  })
});

var end = function () {
    botui.message.add({
      delay: 600,
      loading: true,
      content: "![...](https://cdn.anikore.xin/files/LZ9wcYeziPIna6LB.jpg)"
    })
  };
  var sure = function () {
    botui.message.add({
      delay: 600,
      loading: true,
      content: " ヾ(≧∇≦*)ゝ 来了来了"
    }).then(function () {
      secondpart();
    })
  };
  
  var secondpart = function () {
    botui.message.add({
      delay: 1200,
      content: "95后，学生desu~"
    }).then(function () {
      botui.message.add(
        {
          delay: 1400,
          content: "本科经济学，代码渣，业余程序猿……"
        }
      ).then(function () {
        botui.message.add(
          {
            delay: 2400,
            type : "html",
            content: "嘛，其实就是一个单纯喜欢上上网，看看番，撸撸手办，喜欢接触新鲜事物的宅而已。"
          }).then(function () {
            botui.message.add(
              {
                delay: 1400,
                content: "兴趣爱好广泛，基本上肥宅喜欢的我都喜欢，游戏喜欢偏FPS和策略类的，如果有玩R6的小伙伴的话，欢迎一起~"
              }
            ).then(function () {
              botui.message.add(
                {
                  type: 'html',
                  delay: 1400,
                  content: '<img style="width:100%" src="https://cdn.anikore.xin/files/b1df1ac6e4759c7a563963b6ce29aa8.jpg" > '
                }
              ).then(
                function () {
                  botui.message.add(
                    {
                      delay: 1400,
                      content: '……'
                    }
                  ).then(function () {
                    botui.action.button(
                      {
                        delay: 2000,
                        action: [
                          {
                            text: "为什么叫 Rintarou°？🤔",
                            value: "dog?"
                          }
                        ]
                      }
                    ).then(function (a) {
                      nextdog();
                    })
  
                  })
                }
  
              )
            })
          })
      })
    })
  
  };
  var nextdog = function () {
  
    botui.message.add(
      {
        delay: 800,
        content: '因为一切都是命运石之门的选择(ﾒ｀ﾛ´)/'
      }
    ).then(function () {
  
      botui.action.button(
        {
          delay: 2000,
          action: [
            {
              text: "域名有什么含义吗？(⊙x⊙;)",
              value: "dog"
            }
          ]
        }
      ).then(
        function () {
          botui.message.add(
            {
              delay: 900,
              loading: true,
              type: "html",
              content: "没有什么特别的含义喔，毕竟是中二时代遗留下来的产物╮(╯▽╰)╭"
            }
          )
           }).then(function () {
        botui.message.add(
          {
            delay: 1200,
            content: "那么，既然来了，不妨看看我的博客吧^_^"
        })
        }
      )
    })
  };
}

botuiinit();
