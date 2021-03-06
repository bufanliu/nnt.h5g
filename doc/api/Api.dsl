
package mproto;
message Item{
required int32 item_id=1;
}
message Skill{
required int32 skill_id=1;
required int32 level=2;
optional int32 duration_left=3;
optional int32 duration=4;
optional int32 cd_left=5;
optional int32 cd=6;
}
message Invest{
required int32 invest_id=1;
required int32 level=2;
required double dps=3;
optional double pocket=4;
optional int32 title_equiped=5;
optional int32 marketed=6;
optional int32 locked_duration=7;
}
message MerchantItem{
required int32 merchant_item_id=1;
required string name=2;
required string desc=3;
optional int32 count=4;
optional int32 duration=5;
optional int32 type=6;
optional float price=7;
}
message MetaInfo{
optional int32 relive_id=1;
optional double cur_atk=2;
optional double cur_dps=3;
optional float cri=4;
optional float cr=5;
optional float market_ratio=6;
}
message Header{
required int32 cmd_id=1;
required int32 trans_id=2;
required int32 code=3;
}
message ErrorInfo{
required int32 code=1;
required string message=2;
}
message NullInfo{

}
message Ping{
optional int64 timestamp=1;
}
message LoginReq{
optional int64 user_id=1;
optional string token=2;
}
message LoginRsp{
optional double all_money=1;
optional double money=2;
optional int32 diamond=3;
optional int32 level=4;
optional int32 titled_invest_id=5;
repeated int32 equipments=6;
repeated Item items=7;
repeated Invest invests=8;
repeated Skill skills=9;
repeated MerchantItem merchant_items=10;
optional MetaInfo meta_info=11;
}
message GetOfflineIncomeRsp{
optional double add_money=1;
optional string offline_time=2;
}
message UpdateProfileReq{
optional string nick_name=1;
optional string newbie_step=2;
}
message SetTitleReq{
optional int32 invest_id=1;
}
message SetTitleRsp{
optional Invest invest=1;
optional MetaInfo meta_info=2;
}
message ReliveRsp{
optional double money=1;
optional int32 level=2;
optional Item item=3;
optional MetaInfo meta_info=4;
}
message LevelupReq{
optional int32 level_delta=1;
}
message LevelupRsp{
optional double cost_money=1;
optional MetaInfo meta_info=2;
}
message EquipReq{
required int32 item_id=1;
}
message EquipRsp{
optional MetaInfo meta_info=1;
}
message UseSkillReq{
required int32 skill_id=1;
}
message UseSkillRsp{
optional double money_added=1;
optional Skill skill=2;
optional MetaInfo meta_info=3;
}
message FinishSkillNtf{
optional Skill skill=1;
optional MetaInfo meta_info=2;
}
message InvestNtf{
optional double dps=1;
repeated Invest invests=2;
}
message SkillNtf{
repeated Skill skills=1;
}
message ItemNtf{
repeated Item items=1;
}
message MerchantItemNtf{
repeated MerchantItem merchant_items=1;
}
message CostNtf{
optional double cost_money=1;
optional int32 cost_diamond=2;
}
message DigReq{
optional int32 dig_count=1;
optional double dig_money=2;
}
message DigRsp{
optional double money_diff=1;
}
message ClearPocketReq{
optional int32 invest_id=1;
optional int32 clear_all=2;
}
message ClearPocketRsp{
optional double money_added=1;
}
message UnlockItemReq{
optional int32 item_id=1;
}
message UnlockItemRsp{
optional int32 cost_diamond=1;
optional Item item=2;
}
message UnlockSkillReq{
optional int32 skill_id=1;
}
message UnlockSkillRsp{
optional double cost_money=1;
optional Skill skill=2;
}
message SkillLevelupReq{
optional int32 skill_id=1;
optional int32 level_delta=2;
}
message SkillLevelupRsp{
optional double cost_money=1;
optional Skill skill=2;
optional MetaInfo meta_info=3;
}
message UnlockInvestReq{
optional int32 invest_id=1;
}
message UnlockInvestRsp{
optional double cost_money=1;
optional Invest invest=2;
}
message InvestLevelupReq{
optional int32 invest_id=1;
optional int32 level_delta=2;
}
message InvestLevelupRsp{
optional double cost_money=1;
optional Invest invest=2;
optional MetaInfo meta_info=3;
}
message InvestToMarketReq{
optional int32 invest_id=1;
}
message InvestToMarketRsp{

}