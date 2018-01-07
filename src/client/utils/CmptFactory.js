const CmptFactory = (() => {
	let deps = ["@/components/About.vue",
		"@/components/Article.vue",
		"@/components/Articles.vue",
		"@/components/BlogNav.vue",
		"@/components/Main.vue", // 首页
		"@/components/tools/UplowerCase.vue",
		`../../../node_modules/iview/src/components/affix/affix.vue`,
		`../../../node_modules/iview/src/components/alert/alert.vue`,
		`../../../node_modules/iview/src/components/auto-complete/auto-complete.vue`,
		`../../../node_modules/iview/src/components/avatar/avatar.vue`,
		`../../../node_modules/iview/src/components/back-top/back-top.vue`,
		`../../../node_modules/iview/src/components/badge/badge.vue`,
		`../../../node_modules/iview/src/components/base/notification/notification.vue`,
		`../../../node_modules/iview/src/components/base/notification/notice.vue`,
		`../../../node_modules/iview/src/components/breadcrumb/breadcrumb.vue`,
		`../../../node_modules/iview/src/components/button/button.vue`,
		"../../../node_modules/iview/src/components/grid/row.vue"];

	let cmpts = {};
	let context = {};
	let getCmpt = (...cmptArr) => {
		let resCmpts = {};
		cmptArr.forEach((cmpts => {
			return cmptName => {
				cmpts[cmptName] && (resCmpts[cmptName] = context.resolve([cmpts[cmptName]]));
			};
		})(this.a.cmpts));
		console.log(resCmpts);
		return resCmpts;
	};

	let install = () => {
		// let reg = /[A-Za-z]+-*[A-Za-z]+\./g;
		// let res = {};
		// let res1 = {};
		deps.forEach(dep => {
			// let cmptName = dep.match(reg) && dep.match(reg)[0].split(".")[0].toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()).replace(/-[a-z]/g, L => L.split("-")[1].toUpperCase());
			require.ensure([], (require) => {
				require("@/components/Articles.vue");
			}, "customs");
		});
		deps.forEach(dep => {
			// let cmptName = dep.match(reg) && dep.match(reg)[0].split(".")[0].toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()).replace(/-[a-z]/g, L => L.split("-")[1].toUpperCase());
			require.ensure([], (require) => {
				require("@/components/Articles.vue");
			}, "libs");
		});
		/* require.ensure([], (require) => {
			require("@/components/About.vue");
			require("@/components/Article.vue");
			require("@/components/Articles.vue");
		}, 'customs'); */
		// let res = require.context("@/components/", true, /^\.\/.*\.vue$/);
		/* res.keys().forEach(key => {
			let cmptName = key.match(reg) && key.match(reg)[0].split(".")[0].toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()).replace(/-[a-z]/g, L => L.split("-")[1].toUpperCase());
			cmpts[cmptName] = key;
		});
		let res1 = require.context("../../../node_modules/iview/src/components/", true, /^\.\/.*\.vue$/);
		res1.keys().forEach(key => {
			let cmptName = key.match(reg) && key.match(reg)[0].split(".")[0].toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()).replace(/-[a-z]/g, L => L.split("-")[1].toUpperCase());
			cmpts[cmptName] = key;
		});
		Object.assign(context, res, res1); */
	};
	install();
	return {
		getCmpt,
		cmpts
	};
})();

export default CmptFactory;
