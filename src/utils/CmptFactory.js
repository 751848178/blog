const CMPT_CONF = {
	customers: {
		About: "@/components/About",
		Article: "@/components/Article",
		Articles: "@/components/Articles",
		BlogNav: "@/components/BlogNav",
		Main: "@/components/Main", // 首页
		UplowerCase: "@/components/tools/UplowerCase"
	},
	libs: {
		Affix: "../../node_modules/iview/src/components/affix/affix",
		Alert: "../../node_modules/iview/src/components/alert/alert",
		AutoComplete: "../../node_modules/iview/src/components/auto-complete/auto-complete",
		Avatar: "../../node_modules/iview/src/components/avatar/avatar",
		BackTop: "../../node_modules/iview/src/components/back-top/back-top",
		Badge: "../../node_modules/iview/src/components/badge/badge",
		Notification: "../../node_modules/iview/src/components/base/notification/notification",
		Notice: "../../node_modules/iview/src/components/base/notification/notice",
		Breadcrumb: "../../node_modules/iview/src/components/breadcrumb/breadcrumb",
		Button: "../../node_modules/iview/src/components/button"
	}
};

let cmpts = {};

const getCmpt = (cmpts) => {
	let resCmpts = {};
	cmpts.forEach(cmptName => {
		if (!this.cmpts[cmptName]) {
			this.cmpts[cmptName] = resolve => require((this.CMPT_CONF.customers[cmptName] || this.CMPT_CONF.libs[cmptName]), resolve);
		}
		resCmpts[cmptName] = this.cmpts[cmptName];
	});
	return resCmpts;
};

const CmptFactory = {
	getCmpt,
	CMPT_CONF,
	cmpts
};

export default CmptFactory;
