let MODULE_CONF = {
	customs: {
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

const getCmpt = (cmptArr) => {
	let resCmpts = {};
	cmptArr.forEach(cmptName => {
		if (!cmpts[cmptName]) {
			console.log(MODULE_CONF);
			resCmpts[cmptName] = cmpts[cmptName] = resolve => require([(MODULE_CONF.customs[cmptName] || MODULE_CONF.libs[cmptName])], resolve);
		}
	});
	return resCmpts;
	// return cmptArr.map(cmptName => cmpts[cmptName]);
};

/* const install = () => {
	cmpts = (r => {
		return r.keys().map(key => r(key));
	})(require.context('./', true, /^\.\/modules\/((?!\/)[\s\S])+\/route\.js$/))
	MODULE_CONF.forEach((field) => {
		let cmptNameItem = MODULE_CONF[field];
		MODULE_CONF.forEach(cmptkey => {
			let cmptName = cmptNameItem[cmptkey];
			if (!cmpts[cmptName]) {
				cmpts[cmptName] = resolve => require(cmptName, resolve);
			}
		});
	});
}; */

const CmptFactory = (() => {
	// install();
	return {
		getCmpt,
		MODULE_CONF,
		cmpts
	};
})();

export default CmptFactory;
