import {
	c as create_ssr_component,
	e as escape,
	a as add_attribute,
	b as compute_slots,
	d as subscribe,
	f as createEventDispatcher,
	v as validate_component
} from '../../chunks/index3.js';
import { w as writable } from '../../chunks/index2.js';
import {
	m as modeCurrent,
	s as setInitialClassState,
	A as Avatar
} from '../../chunks/ProgressBar.svelte_svelte_type_style_lang.js';
import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
const themeCrimson = '';
const skeleton = '';
const app = '';
const storePopup = writable(void 0);
function drawerService() {
	const { subscribe: subscribe2, set, update } = writable({});
	return {
		subscribe: subscribe2,
		set,
		update,
		/** Open the drawer. */
		open: (newSettings) =>
			update(() => {
				return { open: true, ...newSettings };
			}),
		/** Close the drawer. */
		close: () =>
			update((d) => {
				d.open = false;
				return d;
			})
	};
}
const drawerStore = drawerService();
const cBase = 'flex flex-col';
const cRowMain = 'grid items-center';
const cRowHeadline = '';
const cSlotLead = 'flex-none flex justify-between items-center';
const cSlotDefault = 'flex-auto';
const cSlotTrail = 'flex-none flex items-center space-x-4';
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let classesBase;
	let classesRowMain;
	let classesRowHeadline;
	let classesSlotLead;
	let classesSlotDefault;
	let classesSlotTrail;
	let $$slots = compute_slots(slots);
	let { background = 'bg-surface-100-800-token' } = $$props;
	let { border = '' } = $$props;
	let { padding = 'p-4' } = $$props;
	let { shadow = '' } = $$props;
	let { spacing = 'space-y-4' } = $$props;
	let { gridColumns = 'grid-cols-[auto_1fr_auto]' } = $$props;
	let { gap = 'gap-4' } = $$props;
	let { regionRowMain = '' } = $$props;
	let { regionRowHeadline = '' } = $$props;
	let { slotLead = '' } = $$props;
	let { slotDefault = '' } = $$props;
	let { slotTrail = '' } = $$props;
	let { label = '' } = $$props;
	let { labelledby = '' } = $$props;
	if ($$props.background === void 0 && $$bindings.background && background !== void 0)
		$$bindings.background(background);
	if ($$props.border === void 0 && $$bindings.border && border !== void 0)
		$$bindings.border(border);
	if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
		$$bindings.padding(padding);
	if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
		$$bindings.shadow(shadow);
	if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
		$$bindings.spacing(spacing);
	if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
		$$bindings.gridColumns(gridColumns);
	if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
	if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
		$$bindings.regionRowMain(regionRowMain);
	if (
		$$props.regionRowHeadline === void 0 &&
		$$bindings.regionRowHeadline &&
		regionRowHeadline !== void 0
	)
		$$bindings.regionRowHeadline(regionRowHeadline);
	if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
		$$bindings.slotLead(slotLead);
	if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
		$$bindings.slotDefault(slotDefault);
	if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
		$$bindings.slotTrail(slotTrail);
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
		$$bindings.labelledby(labelledby);
	classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${
		$$props.class ?? ''
	}`;
	classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
	classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
	classesSlotLead = `${cSlotLead} ${slotLead}`;
	classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
	classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
	return `<div class="${
		'app-bar ' + escape(classesBase, true)
	}" data-testid="app-bar" role="toolbar"${add_attribute('aria-label', label, 0)}${add_attribute(
		'aria-labelledby',
		labelledby,
		0
	)}>
	<div class="${'app-bar-row-main ' + escape(classesRowMain, true)}">
		${
			$$slots.lead
				? `<div class="${'app-bar-slot-lead ' + escape(classesSlotLead, true)}">${
						slots.lead ? slots.lead({}) : ``
				  }</div>`
				: ``
		}
		
		<div class="${'app-bar-slot-default ' + escape(classesSlotDefault, true)}">${
		slots.default ? slots.default({}) : ``
	}</div>
		
		${
			$$slots.trail
				? `<div class="${'app-bar-slot-trail ' + escape(classesSlotTrail, true)}">${
						slots.trail ? slots.trail({}) : ``
				  }</div>`
				: ``
		}</div>
	
	${
		$$slots.headline
			? `<div class="${'app-bar-row-headline ' + escape(classesRowHeadline, true)}">${
					slots.headline ? slots.headline({}) : ``
			  }</div>`
			: ``
	}</div>`;
});
const cBaseAppShell = 'w-full h-full flex flex-col overflow-hidden';
const cContentArea = 'w-full h-full flex overflow-hidden';
const cPage = 'flex-1 overflow-x-hidden flex flex-col';
const cSidebarLeft = 'flex-none overflow-x-hidden overflow-y-auto';
const cSidebarRight = 'flex-none overflow-x-hidden overflow-y-auto';
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let classesBase;
	let classesHeader;
	let classesSidebarLeft;
	let classesSidebarRight;
	let classesPageHeader;
	let classesPageContent;
	let classesPageFooter;
	let classesFooter;
	let $$slots = compute_slots(slots);
	let { regionPage = '' } = $$props;
	let { slotHeader = 'z-10' } = $$props;
	let { slotSidebarLeft = 'w-auto' } = $$props;
	let { slotSidebarRight = 'w-auto' } = $$props;
	let { slotPageHeader = '' } = $$props;
	let { slotPageContent = '' } = $$props;
	let { slotPageFooter = '' } = $$props;
	let { slotFooter = '' } = $$props;
	if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
		$$bindings.regionPage(regionPage);
	if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
		$$bindings.slotHeader(slotHeader);
	if (
		$$props.slotSidebarLeft === void 0 &&
		$$bindings.slotSidebarLeft &&
		slotSidebarLeft !== void 0
	)
		$$bindings.slotSidebarLeft(slotSidebarLeft);
	if (
		$$props.slotSidebarRight === void 0 &&
		$$bindings.slotSidebarRight &&
		slotSidebarRight !== void 0
	)
		$$bindings.slotSidebarRight(slotSidebarRight);
	if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
		$$bindings.slotPageHeader(slotPageHeader);
	if (
		$$props.slotPageContent === void 0 &&
		$$bindings.slotPageContent &&
		slotPageContent !== void 0
	)
		$$bindings.slotPageContent(slotPageContent);
	if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
		$$bindings.slotPageFooter(slotPageFooter);
	if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
		$$bindings.slotFooter(slotFooter);
	classesBase = `${cBaseAppShell} ${$$props.class ?? ''}`;
	classesHeader = `${slotHeader}`;
	classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
	classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
	classesPageHeader = `${slotPageHeader}`;
	classesPageContent = `${slotPageContent}`;
	classesPageFooter = `${slotPageFooter}`;
	classesFooter = `${slotFooter}`;
	return `<div id="appShell"${add_attribute('class', classesBase, 0)} data-testid="app-shell">
	${
		$$slots.header
			? `<header id="shell-header" class="${'flex-none ' + escape(classesHeader, true)}">${
					slots.header ? slots.header({}) : ``
			  }</header>`
			: ``
	}

	
	<div class="${'flex-auto ' + escape(cContentArea, true)}">
		${
			$$slots.sidebarLeft
				? `<aside id="sidebar-left"${add_attribute('class', classesSidebarLeft, 0)}>${
						slots.sidebarLeft ? slots.sidebarLeft({}) : ``
				  }</aside>`
				: ``
		}

		
		<div id="page" class="${escape(regionPage, true) + ' ' + escape(cPage, true)}">
			${
				$$slots.pageHeader
					? `<header id="page-header" class="${'flex-none ' + escape(classesPageHeader, true)}">${
							slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`
					  }</header>`
					: ``
			}

			
			<main id="page-content" class="${'flex-auto ' + escape(classesPageContent, true)}">${
		slots.default ? slots.default({}) : ``
	}</main>

			
			${
				$$slots.pageFooter
					? `<footer id="page-footer" class="${'flex-none ' + escape(classesPageFooter, true)}">${
							slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`
					  }</footer>`
					: ``
			}</div>

		
		${
			$$slots.sidebarRight
				? `<aside id="sidebar-right"${add_attribute('class', classesSidebarRight, 0)}>${
						slots.sidebarRight ? slots.sidebarRight({}) : ``
				  }</aside>`
				: ``
		}</div>

	
	${
		$$slots.footer
			? `<footer id="shell-footer" class="${'flex-none ' + escape(classesFooter, true)}">${
					slots.footer ? slots.footer({}) : ``
			  }</footer>`
			: ``
	}</div>`;
});
const cBackdrop = 'fixed top-0 left-0 right-0 bottom-0 flex';
const cDrawer = 'overflow-y-auto transition-transform';
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let classesPosition;
	let classesWidth;
	let classesHeight;
	let classesRounded;
	let classesBackdrop;
	let classesDrawer;
	let $drawerStore, $$unsubscribe_drawerStore;
	$$unsubscribe_drawerStore = subscribe(drawerStore, (value) => ($drawerStore = value));
	createEventDispatcher();
	let { position = 'left' } = $$props;
	let { duration = 150 } = $$props;
	let { bgBackdrop = 'bg-surface-backdrop-token' } = $$props;
	let { blur = 'backdrop-blur-xs' } = $$props;
	let { padding = '' } = $$props;
	let { bgDrawer = 'bg-surface-100-800-token' } = $$props;
	let { border = '' } = $$props;
	let { rounded = '' } = $$props;
	let { shadow = 'shadow-xl' } = $$props;
	let { width = '' } = $$props;
	let { height = '' } = $$props;
	let { zIndex = 'z-40' } = $$props;
	let { regionBackdrop = '' } = $$props;
	let { regionDrawer = '' } = $$props;
	let { labelledby = '' } = $$props;
	let { describedby = '' } = $$props;
	const presets = {
		top: {
			alignment: 'items-start',
			width: 'w-full',
			height: 'h-[50%]',
			rounded: 'rounded-bl-container-token rounded-br-container-token'
		},
		bottom: {
			alignment: 'items-end',
			width: 'w-full',
			height: ' h-[50%]',
			rounded: 'rounded-tl-container-token rounded-tr-container-token'
		},
		left: {
			alignment: 'justify-start',
			width: 'w-[90%]',
			height: 'h-full',
			rounded: 'rounded-tr-container-token rounded-br-container-token'
		},
		right: {
			alignment: 'justify-end',
			width: 'w-[90%]',
			height: 'h-full',
			rounded: 'rounded-tl-container-token rounded-bl-container-token'
		}
	};
	let elemBackdrop;
	let elemDrawer;
	const propDefaults = {
		position,
		duration,
		bgBackdrop,
		blur,
		padding,
		bgDrawer,
		border,
		rounded,
		shadow,
		width,
		height,
		labelledby,
		describedby,
		regionBackdrop,
		regionDrawer
	};
	function applyPropSettings(settings) {
		position = settings.position || propDefaults.position;
		duration = settings.duration || propDefaults.duration;
		bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
		blur = settings.blur || propDefaults.blur;
		padding = settings.padding || propDefaults.padding;
		bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
		border = settings.border || propDefaults.border;
		rounded = settings.rounded || propDefaults.rounded;
		shadow = settings.shadow || propDefaults.shadow;
		width = settings.width || propDefaults.width;
		height = settings.height || propDefaults.height;
		regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
		regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
		labelledby = settings.labelledby || propDefaults.labelledby;
		describedby = settings.describedby || propDefaults.describedby;
	}
	drawerStore.subscribe((settings) => {
		if (settings.open !== true) return;
		applyPropSettings(settings);
	});
	if ($$props.position === void 0 && $$bindings.position && position !== void 0)
		$$bindings.position(position);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
		$$bindings.duration(duration);
	if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0)
		$$bindings.bgBackdrop(bgBackdrop);
	if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0) $$bindings.blur(blur);
	if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
		$$bindings.padding(padding);
	if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0)
		$$bindings.bgDrawer(bgDrawer);
	if ($$props.border === void 0 && $$bindings.border && border !== void 0)
		$$bindings.border(border);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
		$$bindings.rounded(rounded);
	if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
		$$bindings.shadow(shadow);
	if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0)
		$$bindings.height(height);
	if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
		$$bindings.zIndex(zIndex);
	if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
		$$bindings.regionBackdrop(regionBackdrop);
	if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0)
		$$bindings.regionDrawer(regionDrawer);
	if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
		$$bindings.labelledby(labelledby);
	if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0)
		$$bindings.describedby(describedby);
	classesPosition = presets[position].alignment;
	classesWidth = width ? width : presets[position].width;
	classesHeight = height ? height : presets[position].height;
	classesRounded = rounded ? rounded : presets[position].rounded;
	classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${
		$$props.class ?? ''
	}`;
	classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
	$$unsubscribe_drawerStore();
	return `

${
	$drawerStore.open === true
		? `
	<div class="${
		'drawer-backdrop ' + escape(classesBackdrop, true)
	}" data-testid="drawer-backdrop"${add_attribute('this', elemBackdrop, 0)}>
		<div class="${
			'drawer ' + escape(classesDrawer, true)
		}" data-testid="drawer" role="dialog" aria-modal="true"${add_attribute(
				'aria-labelledby',
				labelledby,
				0
		  )}${add_attribute('aria-describedby', describedby, 0)}${add_attribute('this', elemDrawer, 0)}>
			${slots.default ? slots.default({}) : ``}</div></div>`
		: ``
}`;
});
const cTrack = 'cursor-pointer';
const cThumb = 'aspect-square scale-[0.8] flex justify-center items-center';
const cIcon = 'w-[70%] aspect-square';
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let trackBg;
	let thumbBg;
	let thumbPosition;
	let iconFill;
	let classesTrack;
	let classesThumb;
	let classesIcon;
	let $modeCurrent, $$unsubscribe_modeCurrent;
	$$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => ($modeCurrent = value));
	let { bgLight = 'bg-surface-50' } = $$props;
	let { bgDark = 'bg-surface-900' } = $$props;
	let { fillLight = 'fill-surface-50' } = $$props;
	let { fillDark = 'fill-surface-900' } = $$props;
	let { width = 'w-12' } = $$props;
	let { height = 'h-6' } = $$props;
	let { ring = 'ring-[1px] ring-surface-500/30' } = $$props;
	let { rounded = 'rounded-token' } = $$props;
	const cTransition = `transition-all duration-[200ms]`;
	const svgPath = {
		sun: 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z',
		moon: 'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z'
	};
	if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
		$$bindings.bgLight(bgLight);
	if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
		$$bindings.bgDark(bgDark);
	if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
		$$bindings.fillLight(fillLight);
	if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
		$$bindings.fillDark(fillDark);
	if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0)
		$$bindings.height(height);
	if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0) $$bindings.ring(ring);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
		$$bindings.rounded(rounded);
	trackBg = $modeCurrent === true ? bgLight : bgDark;
	thumbBg = $modeCurrent === true ? bgDark : bgLight;
	thumbPosition = $modeCurrent === true ? 'translate-x-[100%]' : '';
	iconFill = $modeCurrent === true ? fillLight : fillDark;
	classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${
		$$props.class ?? ''
	}`;
	classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
	classesIcon = `${cIcon} ${iconFill}`;
	$$unsubscribe_modeCurrent();
	return `${
		(($$result.head += `<!-- HEAD_svelte-qwgpj2_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-qwgpj2_END -->`),
		'')
	}

<div class="${
		'lightswitch-track ' + escape(classesTrack, true)
	}" role="switch" aria-label="Light Switch"${add_attribute(
		'aria-checked',
		$modeCurrent,
		0
	)} title="${
		'Toggle ' + escape($modeCurrent === true ? 'Dark' : 'Light', true) + ' Mode'
	}" tabindex="0">
	<div class="${'lightswitch-thumb ' + escape(classesThumb, true)}">
		<svg class="${
			'lightswitch-icon ' + escape(classesIcon, true)
		}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute(
		'd',
		$modeCurrent ? svgPath.sun : svgPath.moon,
		0
	)}></path></svg></div></div>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<nav class="list-nav p-4"><ul><li><a href="/">Homepage</a></li>
    <li><a href="/start">Start Here</a></li>
    <li><a href="/athleteprofiles">Athlete Profiles</a></li>
    <li><a href="/tools">Tools</a></li>
    <li><a href="/racereports">Race Report Almanac</a></li>
    <li><a href="/forum">Forum</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/resources">Resources</a></li>
    <li><a href="/almanac">Almanac</a></li>
    <li><a href="/contact">Contact</a></li></ul></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<footer class="bg-surface-100-800-token"><div class="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-6"><div class="md:flex md:justify-between"><div class="mb-4 md:mb-0"><a href="https://aerooats.com/" class="flex items-center"><img src="/images/logo.png" class="h-8 mr-3" alt="Aero Oats Logo">
                  <span class="bg-gradient-to-br from-red-500 to-orange-300 bg-clip-text text-transparent box-decoration-clone"></span>
                  <span class="uppercase self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-br from-ao-pink to-ao-orange bg-clip-text text-transparent box-decoration-clone">Aero Oats</span><p class="px-2">by</p><a href="https://kevinclelland.com/" class="bg-sky-600 px-3 py-1 rounded-full">@kevinclelland</a></a></div></div>
      <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4">
      <div class="sm:flex sm:items-center sm:justify-between"><span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://aerooats.com/" class="hover:underline">Aero Oats™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0"><a href="https://www.instagram.com/aerooatstri/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Instagram page</span></a>
              <a href="https://twitter.com/AeroOats" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  <span class="sr-only">Twitter page</span></a></div></div></div></footer>`;
});
const transition_svelte_svelte_type_style_lang = '';
const css = {
	code: '.transition.svelte-vcdv4c{height:100%}',
	map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { url } = $$props;
	if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
	$$result.css.add(css);
	return `<div class="transition svelte-vcdv4c">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	storePopup.set({
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	});
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `${validate_component(Drawer, 'Drawer').$$render(
		$$result,
		{ class: 'max-w-md' },
		{},
		{
			default: () => {
				return `<h2 class="p-4">Navigation</h2>
	<hr>
	${validate_component(Navigation, 'Navigation').$$render($$result, {}, {}, {})}`;
			}
		}
	)}

${validate_component(AppShell, 'AppShell').$$render(
	$$result,
	{
		slotHeader: 'pb-4',
		slotPageFooter: 'pt-4'
	},
	{},
	{
		pageFooter: () => {
			return `${validate_component(Footer, 'Footer').$$render($$result, {}, {}, {})}`;
		},
		header: () => {
			return `${validate_component(AppBar, 'AppBar').$$render(
				$$result,
				{
					gridColumns: 'grid-cols-3',
					slotDefault: 'place-self-center',
					slotTrail: 'place-content-end'
				},
				{},
				{
					trail: () => {
						return `${validate_component(LightSwitch, 'LightSwitch').$$render($$result, {}, {}, {})}
		${validate_component(Avatar, 'Avatar').$$render(
			$$result,
			{
				src: 'https://1.gravatar.com/avatar/6da489c46ce4b9c37c7c73acd9a9e980?size=128',
				width: 'w-8 sm:w-12',
				rounded: 'rounded-full'
			},
			{},
			{}
		)}

		`;
					},
					lead: () => {
						return `<div class="flex items-center"><button class="btn btn-sm mr-1"><span><svg viewBox="0 0 100 80" class="fill-token w-4 h-4"><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg></span>
			</button><div class="animate-pulse">👈</div><span class="text-right bg-gradient-to-br from-ao-newpink to-ao-teal bg-clip-text text-transparent box-decoration-clone"><strong class="text-base sm:text-xl uppercase px-1"><a href="/start">Start Here</a></strong></span></div>

		`;
					},
					default: () => {
						return `<a href="/"><div class="flex items-center"><span class="invisible sm:visible bg-gradient-to-br from-ao-orange to-ao-pink bg-clip-text text-transparent box-decoration-clone"><strong class="text-3xl uppercase px-2">aero</strong></span>
		<img src="/images/aologosm.png" class="h-20" alt="Aero Oats Logo">
		<span class="invisible sm:visible bg-gradient-to-br from-ao-pink to-ao-orange bg-clip-text text-transparent box-decoration-clone"><strong class="text-3xl uppercase px-2">oats</strong></span></div></a>`;
					}
				}
			)}


	`;
		},
		default: () => {
			return `
	
	
	${validate_component(Transition, 'PageTransition').$$render(
		$$result,
		{ url: data.url },
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}
	`;
		}
	}
)}`;
});
export { Layout as default };
