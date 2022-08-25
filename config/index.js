const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "2b28f42e1d8b4e56bf50edbcf8d8950e",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx06f5ac10fefbceb4",

  // 微信公众号的appsecret
  APP_SECRET: "d09194fcfdcf785e92023493a683c608",

  // 微信公众号的模板ID
  TEMPLATE_ID: "aivZqirpLI-RhK3clPJaSgkWUp95C05YPBvHIExWYhA",

  // 天行API的key
  TXApiKey: "4275fd11fb0f83283d740d60439a8214",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "晴晴",
      // 用户列表的`微信号`
      userId: "oPiQI6P82Aa502rEits2tPJBetlI",
      // 星座
      star: "摩羯座",
      // 生日 - 格式：08-17
      birthday: "08-17",
      // 城市 - 格式：支持省市县区
      city: "山东省济南市历下区",
    }, {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "浩浩",
      // 用户列表的`微信号`
      userId: "oPiQI6GlKjF_Jmy8Sv5f_mhWbvKg",
      // 星座
      star: "摩羯座",
      // 生日 - 格式：02-09
      birthday: "02-09",
      // 城市 - 格式：支持省市县区
      city: "山东省济南市高新区",
    },
  ],

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2020-07-6",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
