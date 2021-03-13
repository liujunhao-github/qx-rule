//^https:\/\/api.rr.tv(\/user\/profile*|\/drama\/app\/get_combined_drama_detail*|\/watch\/v4\/priority_video_quality\/get_priority_video_quality_config*)
var body = $response.body;
var url = $request.url;

if (url.indexOf("/user/profile") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["user"]["level"] = 30;
    obj["data"]["user"]["vipMedal"] = 1;
    obj["data"]["user"]["privilegeList"] = [1, 4, 37, 43, 23];
} else if (url.indexOf("/drama/app/get_combined_drama_detail") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["userVod"]["hasPrivilege"] = true;
    obj["data"]["dramaDetail"]["season"]["downloadBlock"] = false;
    obj["data"]["dramaDetail"]["season"]["feeMode"] = "free";
    obj["data"]["qualityConfig"]["sortedItems"] = [1, 4, 37, 43, 23];
    obj["data"]["qualityConfig"]["sortedItems"][0]["canPlay"] = true;
    obj["data"]["qualityConfig"]["sortedItems"][1]["canPlay"] = true;
    obj["data"]["qualityConfig"]["sortedItems"][2]["canPlay"] = true;
    obj["data"]["qualityConfig"]["sortedItems"][3]["canPlay"] = true;
} else if (url.indexOf("/watch/v4/priority_video_quality/get_priority_video_quality_config") != -1) {
    var obj = JSON.parse(body);
    obj["data"]["qualityConfig"]["sortedItems"][0]["canPlay"] = true;
    obj["data"]["qualityConfig"]["sortedItems"][1]["canPlay"] = true;
    obj["data"]["qualityConfig"]["sortedItems"][2]["canPlay"] = true;
    obj["data"]["qualityConfig"]["sortedItems"][3]["canPlay"] = true;
}
body = JSON.stringify(obj);
$done({ body });