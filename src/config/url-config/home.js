export default {
  base: {
    domain: {
      development: 'http://192.168.11.46:80',
      production: 'https://api.91hotplay.com'
    },
    path: {
      shareDone: 'games/active/shareDone', //完成分享
      getDanMuUrl: 'go/games/act/barrage/list', // 获取弹幕数据
      lotteryRecordUrl: 'go/games/act/gift_lottery/record', // 惊喜宝箱抽奖记录
      lotterySummaryUrl: 'go/games/act/sa/lotterySummary', // 惊喜宝箱战绩
      configUrl: 'go/games/act/config',
      exchangeUrl: 'go/games/act/mission/exchange',
      listUrl: 'go/games/act/mission/list',
      rewardUrl: 'go/games/act/mission/reward',
      consumerankUrl: 'go/games/act/consumerank/rank', // 消费榜
      liveRankUrl: 'go/games/act/liverank/rank', // 消费榜
      liveListUrl: 'go/games/act/liverank/liveList', // 消费榜
      cpTotalRankUrl: 'go/games/act/cprank/totalRank',
      giftLotteryUrl: 'go/games/act/gift_lottery/info',
      mergeGiftUrl: 'go/games/act/gift_lottery/mergeGift',
      rankListUrl: 'go/games/act/gift_lottery/rank',
      giftRingUrl: '/go/games/act/gift_ring/info'
    }
  }
}
