//详细配置参考： https://github.com/ant-tool/atool-l10n



module.exports = {
  "middlewares": {
    "summary": [
      "summary?sourcePattern=client/i18n-messages/**/*.json"
    ],
    "process": [
      "fetchLocal?source=locales,skip",
      "metaToResult?from=defaultMessage,to=en",
      "youdao?apiname=YourName,apikey=YourKey",
      "reduce?-autoPick,autoReduce[]=local,autoReduce[]=meta"
    ],
    "emit": [
      "save?dest=client/language"
    ]
  }
}
