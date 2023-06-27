import { c as create_ssr_component, s as setContext, e as escape, a as add_attribute, b as compute_slots, g as compute_rest_props, h as getContext, i as spread, j as escape_attribute_value, k as escape_object, l as each, v as validate_component } from "../../chunks/index3.js";
import { T as Tools } from "../../chunks/Tools.js";
import { A as Avatar } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { f as formatDate } from "../../chunks/utils.js";
const cBase$1 = "space-y-4";
const cList = "flex overflow-x-auto hide-scrollbar";
const cPanel = "";
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesList;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let { justify = "justify-start" } = $$props;
  let { border = "border-b border-surface-400-500-token" } = $$props;
  let { active = "border-b-2 border-surface-900-50-token" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { flex = "flex-none" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { rounded = "rounded-tl-container-token rounded-tr-container-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { regionList = "" } = $$props;
  let { regionPanel = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { panel = "" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("flex", flex);
  setContext("padding", padding);
  setContext("rounded", rounded);
  setContext("spacing", spacing);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.panel === void 0 && $$bindings.panel && panel !== void 0)
    $$bindings.panel(panel);
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesList = `${cList} ${justify} ${border} ${regionList}`;
  classesPanel = `${cPanel} ${regionPanel}`;
  return `<div class="${"tab-group " + escape(classesBase, true)}" data-testid="tab-group">
	<div class="${"tab-list " + escape(classesList, true)}" role="tablist"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>
	
	${$$slots.panel ? `<div class="${"tab-panel " + escape(classesPanel, true)}" role="tabpanel"${add_attribute("aria-labelledby", panel, 0)} tabindex="0">${slots.panel ? slots.panel({}) : ``}</div>` : ``}</div>`;
});
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesInterface;
  let classesTab;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "controls",
    "regionTab",
    "active",
    "hover",
    "flex",
    "padding",
    "rounded",
    "spacing"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { controls = "" } = $$props;
  let { regionTab = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.regionTab === void 0 && $$bindings.regionTab && regionTab !== void 0)
    $$bindings.regionTab(regionTab);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  selected = value === group;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesTab = `${regionTab}`;
  return `<label${add_attribute("class", classesBase, 0)}>
	<div class="${"tab " + escape(classesTab, true)}" data-testid="tab" role="tab"${add_attribute("aria-controls", controls, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("tabindex", selected ? 0 : -1, 0)}>
		<div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>
		
		<div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			<div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const Upcoming = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const listData = [
    {
      link: "https://protriathletes.org/events/pto-tour/us-open/pro/",
      name: "PTO US Open",
      label: "5 August - Milwaukee, USA"
    },
    {
      link: "https://protriathletes.org/events/pto-tour/asian-open/pro/",
      name: "PTO Asian Open",
      label: "20 August - Singapore"
    },
    {
      link: "https://www.ironman.com/im703-world-championship-2023",
      name: "Ironman 70.3 WC",
      label: "26/27 August - Lahti,Finland"
    },
    {
      link: "https://www.ironman.com/im-world-championship-nice",
      name: "Ironman WC Men",
      label: "10 September - Nice, France"
    },
    {
      link: "https://www.ironman.com/im-world-championship-2023",
      name: "Ironman WC Women",
      label: "14 October - Kona, Hawaii"
    }
  ];
  return `<dl class="list-dl">${each(listData, (v) => {
    return `<div><span class="badge-icon p-4 variant-soft-secondary"><i class="fas fa-calendar-alt"></i></span>
            <a href="${"/" + escape(v.link, true)}"><span class="flex-auto"><dt class="font-bold">${escape(v.name)}</dt>
                <dd class="text-sm opacity-50 text-ellipsis">${escape(v.label)}</dd>
            </span></a>
            
        </div>`;
  })}</dl>`;
});
const Subscribe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-2"><iframe title="Newsletter" src="https://embeds.beehiiv.com/64e6eb02-8ac9-4bd0-8635-7d73a6e10c57?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe></div>`;
});
const Athletes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const listData = [
    {
      avatar: "https://content.protriathletes.org/content/images/2023/03/2731d991-06b4-47d9-8f7c-fa18ee7f48e7-w300.webp",
      name: "Lionel Sanders",
      label: "Youtube, Instagram, Discord",
      link: "./athleteprofiles/movie/lionel-sanders"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/05/de470021-5e6d-4dc6-a008-7060dc46650b-w300.webp",
      name: "Kristian Blummenfelt",
      label: "Youtube, Instagram",
      link: "./athleteprofiles/movie/kristian-blummenfelt"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/03/efa7f753-6a3d-4027-b118-b066f2377493-w300.webp",
      name: "Joe Skipper",
      label: "Youtube, Instagram, Podcast",
      link: "./athleteprofiles/movie/joe-skipper"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/05/427e6abb-0bb0-4135-bf79-c00e422ae11d-w300.webp",
      name: "Paula Findlay",
      label: "Youtube, Instagram, Podcast",
      link: "./athleteprofiles/movie/paula-findlay"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/05/6ba37123-6332-46eb-97de-3c13f30d19cb-w300.webp",
      name: "Anne Haug",
      label: "Instagram",
      link: "./athleteprofiles/movie/anne-haug"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/03/91dc01ce-696c-4840-b54c-67c0186924f6-w300.webp",
      name: "Gustav Iden",
      label: "Instagram",
      link: "./athleteprofiles/movie/gustav-iden"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/05/95a00981-61ff-4356-bb81-2874a89a0c00-w300.webp",
      name: "Magnus Ditlev",
      label: "Instagram",
      link: "./athleteprofiles/movie/magnus-ditlev"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/03/ceee36f5-6532-4299-a0c8-3cba69d69429-w300.webp",
      name: "Sam Laidlow",
      label: "Instagram",
      link: "./athleteprofiles/movie/sam-laidlow"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/05/dd4130db-bbbb-41c4-a125-07bd10a430ac-w300.webp",
      name: "Ashleigh Gentle",
      label: "Instagram",
      link: "./athleteprofiles/movie/ashleigh-gentle"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/05/31ed8c21-2d5f-45ae-8b97-5e109be0228f-w300.webp",
      name: "Lucy Charles-Barclay",
      label: "Instagram",
      link: "./athleteprofiles/movie/lucy-charles-barclay"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/03/5a9de8a7-3877-44bd-953b-361992721dbd-w300.webp",
      name: "Taylor Knibb",
      label: "Instagram",
      link: "./athleteprofiles/movie/taylor-knibb"
    },
    {
      avatar: "https://content.protriathletes.org/content/images/2023/05/5ad53c5c-b684-42cb-8c49-f0aa8d910b42-w300.webp",
      name: "Emma Pallant-Browne",
      label: "Instagram",
      link: "./athleteprofiles/movie/emma-pallant-browne"
    }
  ];
  return `<div class="flex grid grid-cols-3 md:grid-cols-4 gap-4">${each(listData, (v) => {
    return `<div class="col-span-1"><a href="${"/" + escape(v.link, true)}"><img${add_attribute("src", v.avatar, 0)} alt="profile"></a>
            
                                            
        </div>`;
  })}</div>`;
});
const title = "Aero Oats";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let tabsBasic = 0;
  let desc = {
    popular: "Right now in Triathlon.",
    newest: "Race Reviews by You.",
    following: "Posts by users you follow."
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-19mtgnf_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-19mtgnf_END -->`, ""}

	<div><div class="mx-auto max-w-7xl text-token grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
			<div class="col-span-3 card card-hover overflow-hidden"><header><img src="/images/banner2.png" class="bg-black/50 w-full " alt="Post"></header>
				<div class="p-4 space-y-4">${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
      panel: () => {
        return `
							${tabsBasic === 0 ? `<article>
								<section>${each(data.posts, (post) => {
          return `<div class="p-4"><span class="flex justify-between"><h3 class="h3" data-toc-ignore><a${add_attribute("href", post.slug, 0)} class="title">${escape(post.title)}</a></h3><div class="justify-around">${validate_component(Avatar, "Avatar").$$render($$result, { src: post.avatar, width: "w-10" }, {}, {})}</div></span>							
									<p class="date">${escape(formatDate(post.date))}</p>
									<p class="description">${escape(post.description)}</p>
									<br>
									<hr class="opacity-90">
									</div>`;
        })}</section></article>` : `${tabsBasic === 1 ? `<p>${escape(desc.popular)}</p>` : `${tabsBasic === 2 ? `<p>${escape(desc.following)}</p>` : ``}`}`}
						`;
      },
      default: () => {
        return `
						${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "books",
            value: 0,
            group: tabsBasic
          },
          {
            group: ($$value) => {
              tabsBasic = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Race Reports`;
            }
          }
        )}
						${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "movies",
            value: 1,
            group: tabsBasic
          },
          {
            group: ($$value) => {
              tabsBasic = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `News`;
            }
          }
        )}
						${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tv", value: 2, group: tabsBasic },
          {
            group: ($$value) => {
              tabsBasic = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Blog`;
            }
          }
        )}
						`;
      }
    })}</div></div>
				
			
			<div class="col-span-2 card card-hover overflow-hidden"><h3 class="p-4 h3">Newsletter</h3>
				<hr>
				<h6 class="h6 p-4">Bi-weekly bullet point triathlon newsletter for you to chew through while you munch your morning oats.</h6>
				<div class="flex justify-center">${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}</div>

				<h3 class="p-4 h3">Tools</h3>
				<hr>
				<h6 class="h6 p-4">Some useful triathlon calculators.</h6>
				${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})}

				<h3 class="p-4 h3">Athlete Profiles</h3>
				<hr>
				${validate_component(Athletes, "Athletes").$$render($$result, {}, {}, {})}
				
				<h3 class="p-4 h3">Upcoming Races</h3>
				<hr>
				${validate_component(Upcoming, "Upcoming").$$render($$result, {}, {}, {})}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
