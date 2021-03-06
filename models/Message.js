/**
 * Message Model
 *
 */

var mongoose = require("mongoose");

// Message スキーマの定義
/* 足りないプロパティを追加してください */
var schema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// 保存時の処理
schema.pre("save", function (next) {
  // update_at プロパティを現在時刻で更新する。
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model("Message", schema);
