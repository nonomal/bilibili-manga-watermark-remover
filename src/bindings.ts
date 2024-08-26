// @ts-nocheck
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

/** user-defined commands **/


export const commands = {
async generateBackground(mangaDir: string, rectData: RectData | null, width: number, height: number) : Promise<Result<CommandResponse<null>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("generate_background", { mangaDir, rectData, width, height }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async removeWatermark(mangaDir: string, outputDir: string, format: ImageFormat, optimize: boolean, backgroundsData: ([JpgImageData, JpgImageData])[]) : Promise<Result<CommandResponse<null>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("remove_watermark", { mangaDir, outputDir, format, optimize, backgroundsData }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openImage(path: string) : Promise<Result<CommandResponse<JpgImageData>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_image", { path }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getMangaDirData(mangaDir: string) : Promise<Result<CommandResponse<MangaDirData[]>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_manga_dir_data", { mangaDir }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getJpgImageInfos(mangaDir: string) : Promise<CommandResponse<JpgImageInfo[]>> {
    return await TAURI_INVOKE("get_jpg_image_infos", { mangaDir });
},
async showPathInFileManager(path: string) : Promise<void> {
    await TAURI_INVOKE("show_path_in_file_manager", { path });
},
async getBackgroundDirRelativePath(mangaDir: string, width: number, height: number) : Promise<Result<CommandResponse<string>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_background_dir_relative_path", { mangaDir, width, height }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getBackgroundDirAbsPath(mangaDir: string, width: number, height: number) : Promise<Result<CommandResponse<string>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_background_dir_abs_path", { mangaDir, width, height }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getConfig() : Promise<Result<CommandResponse<Config>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_config") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async saveConfig(config: Config) : Promise<Result<CommandResponse<null>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("save_config", { config }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async searchManga(keyword: string) : Promise<Result<CommandResponse<SearchData>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("search_manga", { keyword }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getMangaData(id: number) : Promise<Result<CommandResponse<MangaData>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_manga_data", { id }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async generateQrCode() : Promise<Result<CommandResponse<QrCodeData>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("generate_qr_code") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getQrCodeStatusData(qrcodeKey: string) : Promise<Result<CommandResponse<QrCodeStatusData>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_qr_code_status_data", { qrcodeKey }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getBiliCookieStatusData(biliCookie: string) : Promise<Result<CommandResponse<CookieStatusData>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_bili_cookie_status_data", { biliCookie }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async downloadEpisodes(epIds: number[]) : Promise<Result<CommandResponse<null>, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("download_episodes", { epIds }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
}
}

/** user-defined events **/


export const events = __makeEvents__<{
downloadEpisodeEndEvent: DownloadEpisodeEndEvent,
downloadEpisodePendingEvent: DownloadEpisodePendingEvent,
downloadEpisodeStartEvent: DownloadEpisodeStartEvent,
downloadImageErrorEvent: DownloadImageErrorEvent,
downloadImageSuccessEvent: DownloadImageSuccessEvent,
removeWatermarkEndEvent: RemoveWatermarkEndEvent,
removeWatermarkErrorEvent: RemoveWatermarkErrorEvent,
removeWatermarkStartEvent: RemoveWatermarkStartEvent,
removeWatermarkSuccessEvent: RemoveWatermarkSuccessEvent
}>({
downloadEpisodeEndEvent: "download-episode-end-event",
downloadEpisodePendingEvent: "download-episode-pending-event",
downloadEpisodeStartEvent: "download-episode-start-event",
downloadImageErrorEvent: "download-image-error-event",
downloadImageSuccessEvent: "download-image-success-event",
removeWatermarkEndEvent: "remove-watermark-end-event",
removeWatermarkErrorEvent: "remove-watermark-error-event",
removeWatermarkStartEvent: "remove-watermark-start-event",
removeWatermarkSuccessEvent: "remove-watermark-success-event"
})

/** user-defined constants **/



/** user-defined types **/

export type Author = { id: number; name: string; cname: string }
export type AutoPayInfo = { auto_pay_orders: AutoPayOrder[]; id: number }
export type AutoPayOrder = { id: number; title: string }
export type Banner = { icon: string; title: string; url: string }
export type CommandError = string
export type CommandResponse<T> = { code: number; msg: string; data: T }
export type Config = { outputDir: string; outputFormat: ImageFormat; outputOptimize: boolean; biliCookie: string }
export type CookieStatusData = { isLogin: boolean }
export type DataInfo = { read_score: ReadScore; interactive_value: InteractiveValue }
export type DownloadEpisodeEndEvent = DownloadEpisodeEndEventPayload
export type DownloadEpisodeEndEventPayload = { epId: number; errMsg: string | null }
export type DownloadEpisodePendingEvent = DownloadEpisodePendingEventPayload
export type DownloadEpisodePendingEventPayload = { epId: number }
export type DownloadEpisodeStartEvent = DownloadEpisodeStartEventPayload
export type DownloadEpisodeStartEventPayload = { epId: number; title: string; total: number }
export type DownloadImageErrorEvent = DownloadImageErrorEventPayload
export type DownloadImageErrorEventPayload = { epId: number; url: string; errMsg: string }
export type DownloadImageSuccessEvent = DownloadImageSuccessEventPayload
export type DownloadImageSuccessEventPayload = { epId: number; url: string; current: number }
export type EpList = { id: number; ord: number; read: number; pay_mode: number; is_locked: boolean; pay_gold: number; size: number; short_title: string; is_in_free: boolean; title: string; cover: string; pub_time: string; comments: number; unlock_expire_at: string; unlock_type: number; allow_wait_free: boolean; progress: string; like_count: number; chapter_id: number; type: number; extra: number; image_count: number; index_last_modified: string; jump_url: string }
export type FavComicInfo = { has_fav_activity: boolean; fav_free_amount: number; fav_coupon_type: number }
export type ImageFormat = "Jpeg" | "Png"
export type Increase = { days: number; increase_percent: number }
export type Increase2 = { days: number; increase_percent: number }
export type InteractiveValue = { interact_value: string; is_jump: boolean; increase: Increase2; percentile: number; description: string }
export type JpgImageData = { info: JpgImageInfo; base64: string }
export type JpgImageInfo = { width: number; height: number; path: string }
export type List = { id: number; title: string; org_title: string; horizontal_cover: string; square_cover: string; vertical_cover: string; author_name: string[]; styles: string[]; is_finish: number; allow_wait_free: boolean; discount_type: number; type: number; wiki: Wiki; numbers: number; jump_value: string; real_title: string }
export type MangaData = { id: number; title: string; comic_type: number; page_default: number; page_allow: number; horizontal_cover: string; square_cover: string; vertical_cover: string; author_name: string[]; styles: string[]; last_ord: number; is_finish: number; status: number; fav: number; read_order: number; evaluate: string; total: number; ep_list: EpList[]; release_time: string; is_limit: number; read_epid: number; last_read_time: string; is_download: number; read_short_title: string; styles2: Styles2[]; renewal_time: string; last_short_title: string; discount_type: number; discount: number; discount_end: string; no_reward: boolean; batch_discount_type: number; ep_discount_type: number; has_fav_activity: boolean; fav_free_amount: number; allow_wait_free: boolean; wait_hour: number; wait_free_at: string; no_danmaku: number; auto_pay_status: number; no_month_ticket: boolean; immersive: boolean; no_discount: boolean; show_type: number; pay_mode: number; classic_lines: string; pay_for_new: number; fav_comic_info: FavComicInfo; serial_status: number; album_count: number; wiki_id: number; disable_coupon_amount: number; japan_comic: boolean; interact_value: string; temporary_finish_time: string; introduction: string; comment_status: number; no_screenshot: boolean; type: number; no_rank: boolean; presale_text: string; presale_discount: number; no_leaderboard: boolean; auto_pay_info: AutoPayInfo; orientation: number; story_elems: StoryElem[]; tags: Tag[]; is_star_hall: number; hall_icon_text: string; rookie_fav_tip: RookieFavTip; authors: Author[]; comic_alias: string[]; horizontal_covers: string[]; data_info: DataInfo; last_short_title_msg: string }
export type MangaDirData = { width: number; height: number; count: number; blackBackground: JpgImageData | null; whiteBackground: JpgImageData | null }
export type QrCodeData = { base64: string; qrcodeKey: string }
export type QrCodeStatusData = { url: string; refresh_token: string; timestamp: number; code: number; message: string }
export type ReadScore = { read_score: string; is_jump: boolean; increase: Increase; percentile: number; description: string }
export type Recommend = { id: number; title: string; horizontal_cover: string; square_cover: string; vertical_cover: string; last_short_title: string; recommendation: string; is_finish: number; total: number; allow_wait_free: boolean; author_name: string[]; styles: string[]; discount_type: number }
export type RectData = { left: number; top: number; right: number; bottom: number }
export type RemoveWatermarkEndEvent = RemoveWatermarkEndEventPayload
export type RemoveWatermarkEndEventPayload = { dirPath: string }
export type RemoveWatermarkErrorEvent = RemoveWatermarkErrorEventPayload
export type RemoveWatermarkErrorEventPayload = { dirPath: string; imgPath: string; errMsg: string }
export type RemoveWatermarkStartEvent = RemoveWatermarkStartEventPayload
export type RemoveWatermarkStartEventPayload = { dirPath: string; total: number }
export type RemoveWatermarkSuccessEvent = RemoveWatermarkSuccessEventPayload
export type RemoveWatermarkSuccessEventPayload = { dirPath: string; imgPath: string; current: number }
export type RookieFavTip = { is_show: boolean; used: number; total: number }
export type SearchData = { list: List[]; total_page: number; total_num: number; recommends: Recommend[]; similar: string; se_id: string; banner: Banner }
export type StoryElem = { id: number; name: string }
export type Styles2 = { id: number; name: string }
export type Tag = { id: number; name: string }
export type Wiki = { id: number; title: string; origin_title: string; vertical_cover: string; producer: string; author_name: string[]; publish_time: string; frequency: string }

/** tauri-specta globals **/

import {
	invoke as TAURI_INVOKE,
	Channel as TAURI_CHANNEL,
} from "@tauri-apps/api/core";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";
import { type WebviewWindow as __WebviewWindow__ } from "@tauri-apps/api/webviewWindow";

type __EventObj__<T> = {
	listen: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
	once: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
	emit: T extends null
		? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
		: (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
};

export type Result<T, E> =
	| { status: "ok"; data: T }
	| { status: "error"; error: E };

function __makeEvents__<T extends Record<string, any>>(
	mappings: Record<keyof T, string>,
) {
	return new Proxy(
		{} as unknown as {
			[K in keyof T]: __EventObj__<T[K]> & {
				(handle: __WebviewWindow__): __EventObj__<T[K]>;
			};
		},
		{
			get: (_, event) => {
				const name = mappings[event as keyof T];

				return new Proxy((() => {}) as any, {
					apply: (_, __, [window]: [__WebviewWindow__]) => ({
						listen: (arg: any) => window.listen(name, arg),
						once: (arg: any) => window.once(name, arg),
						emit: (arg: any) => window.emit(name, arg),
					}),
					get: (_, command: keyof __EventObj__<any>) => {
						switch (command) {
							case "listen":
								return (arg: any) => TAURI_API_EVENT.listen(name, arg);
							case "once":
								return (arg: any) => TAURI_API_EVENT.once(name, arg);
							case "emit":
								return (arg: any) => TAURI_API_EVENT.emit(name, arg);
						}
					},
				});
			},
		},
	);
}
