module.exports = {
  "middlewares": {
    "summary": [
      "summary?sourcePattern=client/**/*.jsx,"
    ],
    "process": [
      //"fetchLocal?source=client/i18n-messages/**/*.json",
      'fetchLocal?source=locales,skip',
      "metaToResult?from=defaultMessage,to=zh",
      // "gugu?from[]=zh,to[]=en",
      "reduce?-autoPick,autoReduce[]=local,autoReduce[]=meta"
    ],
    "emit": [
      "save?dest=client/language/"
    ]
  }
};