var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// components/Icon.tsx
import { jsx } from "react/jsx-runtime";
function Icon({ icon, size, label }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "material-symbols-outlined",
      role: label ? "img" : void 0,
      "aria-label": label || void 0,
      "aria-hidden": label ? void 0 : true,
      children: icon
    }
  );
}

// components/Accordion.tsx
import { useEffect, useState } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Accordion({ steps = [], active }) {
  const [activeId, setActiveId] = useState(active != null ? active : null);
  useEffect(() => {
    if (active) setActiveId(active);
  }, [active]);
  return /* @__PURE__ */ jsx2("ul", { className: "accordion list-none p-0 m-0", children: steps.map((step) => {
    const isActive = activeId === step.id;
    return /* @__PURE__ */ jsx2(
      "li",
      {
        className: `border-b border-stroke p-3 transition-colors duration-200 bg-white`,
        children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveId(step.id),
            "aria-expanded": isActive,
            className: "w-full flex gap-5 text-left cursor-pointer hover:opacity-90",
            children: [
              step.icon && /* @__PURE__ */ jsx2("div", { className: isActive ? "text-primary" : "text-muted", children: /* @__PURE__ */ jsx2(Icon, { icon: step.icon }) }),
              /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex flex-row w-full items-center", children: [
                  /* @__PURE__ */ jsx2(
                    "span",
                    {
                      className: `flex-1 text-lg ${isActive ? "font-bold text-primary" : ""}`,
                      children: step.label
                    }
                  ),
                  /* @__PURE__ */ jsx2(
                    Icon,
                    {
                      icon: isActive ? "expand_less" : "expand_more"
                    }
                  )
                ] }),
                step.subtitle && /* @__PURE__ */ jsx2(
                  "span",
                  {
                    className: `grid transition-all duration-300 ease-out ${isActive ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"}`,
                    children: /* @__PURE__ */ jsx2("span", { className: "overflow-hidden block", children: step.subtitle })
                  }
                )
              ] })
            ]
          }
        )
      },
      step.id
    );
  }) });
}

// components/Alert.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var toneBase = {
  "danger": "bg-danger text-white",
  "info": "bg-light text-base",
  "success": "bg-success text-white",
  "warning": "bg-warning text-base"
};
function Alert({ tone, label, onDismiss }) {
  const iconBase = {
    "danger": "report",
    "info": "info",
    "success": "check",
    "warning": "warning"
  };
  const isUrgent = tone === "danger" || tone === "warning";
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      role: isUrgent ? "alert" : "status",
      "aria-live": isUrgent ? "assertive" : "polite",
      className: `p-2 flex items-center gap-2 rounded my-2 ${toneBase[tone]}`,
      children: [
        /* @__PURE__ */ jsx3(Icon, { icon: iconBase[tone], label: tone }),
        /* @__PURE__ */ jsx3("span", { className: "flex-1", children: label }),
        onDismiss && /* @__PURE__ */ jsx3("button", { type: "button", onClick: onDismiss, "aria-label": "Dismiss", children: /* @__PURE__ */ jsx3(Icon, { icon: "close" }) })
      ]
    }
  );
}

// components/Avatar.tsx
import { Fragment, jsx as jsx4 } from "react/jsx-runtime";
function Avatar({ variant, bgColor, value, src, alt }) {
  let content;
  let wrapperStyle;
  let wrapperBg = bgColor ? bgColor : "bg-primary";
  let wrapperLabel;
  switch (variant) {
    case "icon":
      wrapperStyle = "text-white";
      content = value ? /* @__PURE__ */ jsx4(Icon, { icon: value }) : /* @__PURE__ */ jsx4(Icon, { icon: "folder" });
      wrapperLabel = value || "folder";
      break;
    case "image":
      content = /* @__PURE__ */ jsx4("img", { src, alt: alt != null ? alt : "", className: "rounded w-full h-full" });
      break;
    case "initials":
    default:
      wrapperStyle = "text-white";
      content = /* @__PURE__ */ jsx4(Fragment, { children: value });
      wrapperLabel = value;
      break;
  }
  return /* @__PURE__ */ jsx4(
    "div",
    {
      role: variant === "image" ? void 0 : "img",
      "aria-label": variant === "image" ? void 0 : wrapperLabel,
      className: `${wrapperBg} ${wrapperStyle} overflow-hidden w-10 h-10 flex justify-center items-center rounded-full`,
      children: content
    }
  );
}

// components/Badge.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Badge({ tone, label }) {
  const toneBase2 = {
    "neutral": "bg-light text-base",
    "primary": "bg-primary text-white",
    "success": "bg-success text-white",
    "warning": "bg-warning text-base",
    "error": "bg-danger text-white"
  };
  return /* @__PURE__ */ jsx5(
    "span",
    {
      className: `${toneBase2[tone]} p-1 text-sm rounded`,
      "aria-label": `${label} (${tone})`,
      children: label
    }
  );
}

// components/Breadcrumb.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function BreadCrumb({ items }) {
  return /* @__PURE__ */ jsx6("nav", { "aria-label": "Breadcrumb", className: "my-5 text-sm", children: /* @__PURE__ */ jsxs3("ol", { className: "flex flex-row items-center gap-3 list-none p-0 m-0", children: [
    /* @__PURE__ */ jsx6("li", { className: "flex items-center", children: /* @__PURE__ */ jsx6("a", { href: "/", className: "text-muted", "aria-label": "Home", children: /* @__PURE__ */ jsx6(Icon, { icon: "home" }) }) }),
    items.map((item, index) => {
      const isLast = index === items.length - 1;
      return /* @__PURE__ */ jsxs3("li", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx6(Icon, { icon: "chevron_right" }),
        /* @__PURE__ */ jsx6(
          "a",
          {
            className: "flex hover:text-base flex-row items-center gap-3 group",
            href: item.link,
            "aria-current": isLast ? "page" : void 0,
            children: /* @__PURE__ */ jsx6("span", { className: "group-hover:underline", children: item.label })
          }
        )
      ] }, index);
    })
  ] }) });
}

// components/Button.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function Button({ variant, size, icon, rightIcon, disabled, onClick, label, ariaLabel }) {
  const sizeBase = {
    "lg": "font-xl font-bold p-3 rounded",
    "sm": "text-sm p-2 rounded-md"
  };
  const colorBase = {
    "primary": "bg-primary text-white border-primary shadow-md",
    "secondary": "bg-white hover:bg-light text-base border-stroke",
    "ghost": "bg-transparent hover:bg-light border-transparent text-base",
    "danger": "bg-danger text-white hover:opacity-90 border-transparent",
    "floating": `${size === "lg" ? "w-15 h-15" : "w-10 h-10"} rounded-full bg-secondary flex items-center justify-center text-white`
  };
  const accessibleName = ariaLabel || (!label ? icon || rightIcon : void 0);
  return /* @__PURE__ */ jsxs4(
    "button",
    {
      type: "button",
      disabled,
      "aria-disabled": disabled || void 0,
      "aria-label": accessibleName,
      onClick,
      className: `transition-transform duration-150 ease-out hover:scale-102 active:scale-98
             cursor-pointer items-center inline-flex gap-1 border-1 ${variant !== "floating" && sizeBase[size]} ${colorBase[variant]}`,
      children: [
        icon && /* @__PURE__ */ jsx7(Icon, { icon }),
        label && /* @__PURE__ */ jsx7("span", { children: label }),
        rightIcon && /* @__PURE__ */ jsx7(Icon, { icon: rightIcon })
      ]
    }
  );
}
function FabWrapper({ children }) {
  return /* @__PURE__ */ jsx7("div", { className: "fixed flex-col flex items-center gap-2 right-0 bottom-0 m-5", children });
}

// components/Card.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function Card({ title, maxWidth, description, media, primaryAction, secondaryAction }) {
  var _a;
  const titleId = `card-title-${title == null ? void 0 : title.replace(/\s+/g, "-").toLowerCase()}`;
  return /* @__PURE__ */ jsxs5(
    "article",
    {
      style: { maxWidth: maxWidth || void 0 },
      "aria-labelledby": titleId,
      className: "bg-white rounded-lg overflow-hidden shadow-md",
      children: [
        media && /* @__PURE__ */ jsx8("img", { src: media.src, className: "w-full", alt: (_a = media.alt) != null ? _a : "" }),
        /* @__PURE__ */ jsxs5("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx8("h3", { id: titleId, className: "text-base text-lg font-bold", children: title }),
          /* @__PURE__ */ jsx8("p", { className: "text-muted text-sm", children: description })
        ] }),
        (primaryAction || secondaryAction) && /* @__PURE__ */ jsxs5("div", { className: "p-4 justify-end border-t border-stroke flex gap-2", children: [
          secondaryAction && /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "secondary",
              onClick: secondaryAction == null ? void 0 : secondaryAction.onClick,
              label: secondaryAction.label,
              size: "sm"
            }
          ),
          primaryAction && /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "primary",
              onClick: primaryAction == null ? void 0 : primaryAction.onClick,
              label: primaryAction.label,
              size: "sm"
            }
          )
        ] })
      ]
    }
  );
}

// components/Chip.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function Chip({ icon, label, dismissAction }) {
  return /* @__PURE__ */ jsxs6("div", { className: "bg-light flex items-center text-base rounded-3xl p-2", children: [
    icon && /* @__PURE__ */ jsx9(Icon, { icon }),
    /* @__PURE__ */ jsx9("span", { className: "text-sm flex-1 px-2", children: label }),
    dismissAction && /* @__PURE__ */ jsx9(
      "button",
      {
        type: "button",
        onClick: dismissAction,
        "aria-label": `Remove ${label}`,
        children: /* @__PURE__ */ jsx9(Icon, { icon: "close" })
      }
    )
  ] });
}

// components/Choice.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
function Choice({ id, label, isChecked, subtitle, type, onChange }) {
  let iconPlacement = "indeterminate_check_box";
  if (type === "checkbox") {
    iconPlacement = isChecked ? "check_box" : "check_box_outline_blank";
  }
  if (type === "radio") {
    iconPlacement = isChecked ? "radio_button_checked" : "radio_button_unchecked";
  }
  const subtitleId = subtitle ? `${id}-subtitle` : void 0;
  return /* @__PURE__ */ jsxs7("label", { htmlFor: id, className: "block flex gap-2 py-1 cursor-pointer text-base hover:text-muted", children: [
    type !== "switch" && /* @__PURE__ */ jsx10("div", { "aria-hidden": "true", className: isChecked ? "text-primary" : "text-muted", children: /* @__PURE__ */ jsx10(Icon, { icon: iconPlacement }) }),
    /* @__PURE__ */ jsx10(
      "input",
      {
        id,
        type: type === "switch" ? "checkbox" : type,
        role: type === "switch" ? "switch" : void 0,
        checked: isChecked,
        "aria-describedby": subtitleId,
        onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
        className: "opacity-0 absolute"
      }
    ),
    /* @__PURE__ */ jsxs7("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx10("p", { className: isChecked ? "font-bold" : "font-normal", children: label }),
      subtitle && /* @__PURE__ */ jsx10("p", { id: subtitleId, className: "text-muted text-sm", children: subtitle })
    ] }),
    type === "switch" && /* @__PURE__ */ jsx10("div", { "aria-hidden": "true", className: `flex items-center w-12 h-7 rounded-2xl ${isChecked ? "bg-success justify-end" : "bg-muted justify-start"}`, children: /* @__PURE__ */ jsx10("div", { className: "w-5 h-5 bg-white rounded-full m-1" }) })
  ] });
}
function ChoiceGroup({ label, type, children }) {
  return /* @__PURE__ */ jsxs7(
    "fieldset",
    {
      role: type === "radio" ? "radiogroup" : void 0,
      "aria-label": label,
      className: "mb-5",
      children: [
        label && /* @__PURE__ */ jsx10("legend", { className: "font-bold mb-2 text-base", children: label }),
        children
      ]
    }
  );
}

// components/Collection.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
function Collection({ link, avatarIcon, leftIcon, label, subtitle, badge, rightIcon }) {
  let content = /* @__PURE__ */ jsxs8("div", { className: `bg-white ${link && "hover:bg-light"} border-b text-muted hover:text-base border-stroke flex p-4 gap-3 items-start`, children: [
    avatarIcon && /* @__PURE__ */ jsx11(Avatar, { variant: "icon", bgColor: "bg-muted", value: avatarIcon }),
    leftIcon && /* @__PURE__ */ jsx11(Icon, { icon: leftIcon }),
    /* @__PURE__ */ jsxs8("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx11("p", { className: "text-base", children: label }),
      subtitle && /* @__PURE__ */ jsx11("p", { className: "text-sm text-muted", children: subtitle })
    ] }),
    badge && /* @__PURE__ */ jsx11(Badge, { tone: badge.variant, label: badge.label }),
    rightIcon && /* @__PURE__ */ jsx11(Icon, { icon: rightIcon })
  ] });
  return link ? /* @__PURE__ */ jsx11("a", { href: link, className: "block", children: content }) : content;
}

// components/Input.tsx
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
function Input({ id, type, label, placeholder, leadingIcon, rightAction, helperText, error, value, onChange }) {
  const errorId = error ? `${id}-error` : void 0;
  const helperId = helperText ? `${id}-helper` : void 0;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ jsxs9("div", { className: "flex flex-row gap-3 mb-5", children: [
    leadingIcon && /* @__PURE__ */ jsx12("div", { "aria-hidden": "true", className: error ? "text-danger" : "text-muted", children: /* @__PURE__ */ jsx12(Icon, { icon: leadingIcon }) }),
    /* @__PURE__ */ jsxs9("div", { className: "flex flex-col flex-1 group", children: [
      /* @__PURE__ */ jsx12("label", { className: "text-base font-bold", htmlFor: id, children: label }),
      /* @__PURE__ */ jsxs9("div", { className: `flex flex-row gap-2 border-b-2 flex-1
                ${error ? "border-danger" : "border-stroke"}
                group-focus-within:border-primary`, children: [
        /* @__PURE__ */ jsx12(
          "input",
          {
            id,
            type,
            value,
            onChange,
            "aria-invalid": error ? true : void 0,
            "aria-describedby": describedBy,
            className: "pb-2 flex-1 mb-1 outline-0",
            placeholder
          }
        ),
        rightAction && /* @__PURE__ */ jsx12(
          "button",
          {
            type: "button",
            onClick: rightAction.onClick,
            "aria-label": rightAction.label || rightAction.icon,
            children: /* @__PURE__ */ jsx12(Icon, { icon: rightAction.icon })
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx12("p", { id: errorId, role: "alert", className: "text-danger text-sm", children: error }),
      helperText && /* @__PURE__ */ jsx12("p", { id: helperId, className: "text-muted text-sm", children: helperText })
    ] })
  ] });
}

// components/Modal.tsx
import { useEffect as useEffect2, useRef } from "react";

// components/Well.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function Well({ isCollapsed, children, direction }) {
  return /* @__PURE__ */ jsx13("div", { className: `bg-white shadow overflow-hidden flex
    ${direction === "row" ? "flex-row" : "flex-col"}
     ${isCollapsed ? "" : "p-3 gap-3"}
     mb-3 rounded-lg`, children });
}

// components/Modal.tsx
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
var sizeKeys = {
  "sm": "w-2/5",
  "lg": "w-4/5",
  "md": "w-3/5"
};
function Modal({ title, children, size, buttons, onClose }) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);
  const titleId = "modal-title";
  useEffect2(() => {
    var _a, _b, _c;
    previouslyFocused.current = document.activeElement;
    const focusable = (_a = dialogRef.current) == null ? void 0 : _a.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    (_c = (_b = focusable == null ? void 0 : focusable[0]) != null ? _b : dialogRef.current) == null ? void 0 : _c.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      var _a2;
      document.removeEventListener("keydown", handleKeyDown);
      (_a2 = previouslyFocused.current) == null ? void 0 : _a2.focus();
    };
  }, [onClose]);
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: "fixed top-0 left-0 w-full h-full bg-black/60 overflow-auto",
      onClick: onClose,
      children: /* @__PURE__ */ jsx14(
        "div",
        {
          ref: dialogRef,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? titleId : void 0,
          tabIndex: -1,
          onClick: (e) => e.stopPropagation(),
          className: `${sizeKeys[size ? size : "md"]} p-3 ms-auto`,
          children: /* @__PURE__ */ jsxs10(Well, { direction: "column", children: [
            /* @__PURE__ */ jsxs10("header", { className: "border-b pb-3 border-stroke flex w-full items-center", children: [
              /* @__PURE__ */ jsx14("div", { className: "flex-fill w-full", children: /* @__PURE__ */ jsx14("h2", { id: titleId, className: "text-2xl font-bold text-base", children: title }) }),
              /* @__PURE__ */ jsx14(Button, { onClick: onClose, variant: "ghost", size: "sm", icon: "close", ariaLabel: "Close dialog" })
            ] }),
            /* @__PURE__ */ jsx14("section", { children }),
            buttons && /* @__PURE__ */ jsx14("footer", { className: "border-t pt-3 border-stroke gap-3 flex-row-reverse flex", children: buttons.map((btn, index) => /* @__PURE__ */ jsx14(Button, __spreadValues({}, btn), index)) })
          ] })
        }
      )
    }
  );
}

// components/PageHeader.tsx
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
import { createElement } from "react";
function PageHeader({ title, buttons }) {
  return /* @__PURE__ */ jsxs11("header", { className: "flex flex-row items-center", children: [
    /* @__PURE__ */ jsx15("div", { className: "flex-1", children: /* @__PURE__ */ jsx15("h1", { className: "font-bold text-4xl", children: title }) }),
    /* @__PURE__ */ jsx15("div", { className: "flex flex-row-reverse gap-3", role: "group", "aria-label": "Page actions", children: buttons.map((item, index) => /* @__PURE__ */ createElement(Button, __spreadProps(__spreadValues({}, item), { key: index }))) })
  ] });
}

// components/Stepper.tsx
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
function Stepper({ steps = [], active, direction, onClick }) {
  const isCol = direction === "col";
  return /* @__PURE__ */ jsx16(
    "ol",
    {
      "aria-label": "Progress",
      className: `stepper flex list-none p-0 m-0 my-5 ${isCol ? "flex-col content-start items-center" : "flex-row w-full"}`,
      children: steps.map((item) => {
        const isActive = active === item.id;
        return /* @__PURE__ */ jsxs12(
          "li",
          {
            className: `relative group flex flex-1 w-full ${isCol ? "py-4" : ""}`,
            children: [
              /* @__PURE__ */ jsx16(
                "span",
                {
                  "aria-hidden": "true",
                  className: `border-stroke absolute mx-auto ${isCol ? "stepper-col w-1 h-15 mt-4 border-s ms-5" : "border-b h-1 w-full mt-4"}`
                }
              ),
              /* @__PURE__ */ jsxs12(
                "button",
                {
                  type: "button",
                  onClick: () => onClick == null ? void 0 : onClick(item.id),
                  "aria-current": isActive ? "step" : void 0,
                  className: `flex cursor-pointer hover:opacity-90 ${isCol ? "flex-row items-start text-start gap-3" : "flex-col items-center content-center mx-auto text-center gap-1"}`,
                  children: [
                    /* @__PURE__ */ jsx16("span", { className: "shrink-0 mx-auto z-10", children: /* @__PURE__ */ jsx16(
                      Avatar,
                      {
                        variant: item.icon ? "icon" : "initials",
                        bgColor: isActive ? "bg-primary" : "bg-muted",
                        value: item.icon || item.label
                      }
                    ) }),
                    /* @__PURE__ */ jsxs12("span", { className: "flex-fill", children: [
                      /* @__PURE__ */ jsx16(
                        "span",
                        {
                          className: `block text-sm ${isActive ? "font-bold text-primary" : "font-normal"}`,
                          children: item.label
                        }
                      ),
                      item.subtitle && /* @__PURE__ */ jsx16("span", { className: "block text-muted text-xs", children: item.subtitle })
                    ] })
                  ]
                }
              )
            ]
          },
          item.id
        );
      })
    }
  );
}

// components/Tab.tsx
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
function Tab({ tabs, ariaLabel, active }) {
  return /* @__PURE__ */ jsx17("nav", { "aria-label": ariaLabel, className: "flex bg-secondary", children: tabs.map((item, index) => /* @__PURE__ */ jsxs13(
    "a",
    {
      className: `text-white gap-2 flex hover:bg-primary p-5
            ${active === item.id ? "font-bold bg-primary" : "opacity-90"}`,
      href: `#${item.id}`,
      "aria-current": active === item.id ? "page" : void 0,
      children: [
        item.icon && /* @__PURE__ */ jsx17(Icon, { icon: item.icon }),
        item.label && /* @__PURE__ */ jsx17("span", { children: item.label })
      ]
    },
    index
  )) });
}
function SegmentTab({ tabs, active }) {
  return /* @__PURE__ */ jsx17("nav", { "aria-label": "View", className: "flex my-5", children: tabs.map((item, index) => /* @__PURE__ */ jsxs13(
    "a",
    {
      className: `text-base text-sm gap-1 flex py-2 px-3 rounded-3xl
            ${active === item.id ? "font-bold bg-white shadow text-primary" : "hover:text-muted"}`,
      href: `#${item.id}`,
      "aria-current": active === item.id ? "page" : void 0,
      children: [
        item.icon && /* @__PURE__ */ jsx17(Icon, { icon: item.icon }),
        item.label && /* @__PURE__ */ jsx17("span", { children: item.label })
      ]
    },
    index
  )) });
}
function TabNav({ children }) {
  return /* @__PURE__ */ jsx17("header", { className: "flex flex-row bg-secondary justify-between", children });
}

// components/Table.tsx
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
function Table({ children, caption }) {
  return /* @__PURE__ */ jsx18(Well, { isCollapsed: true, children: /* @__PURE__ */ jsxs14("table", { className: "w-full", children: [
    caption && /* @__PURE__ */ jsx18("caption", { className: "sr-only", children: caption }),
    children
  ] }) });
}
function Th({ label, handleSort, sortDirection }) {
  let wrapItems = /* @__PURE__ */ jsxs14("div", { className: "cursor-pointer hover:text-base flex text-muted items-center gap-2 text-md", children: [
    /* @__PURE__ */ jsx18("span", { children: label }),
    handleSort && /* @__PURE__ */ jsx18(Icon, { icon: "arrow_drop_down" })
  ] });
  return /* @__PURE__ */ jsx18(
    "th",
    {
      scope: "col",
      "aria-sort": handleSort ? sortDirection || "none" : void 0,
      className: "bg-white hover:bg-light p-3 text-md border-b border-stroke text-left",
      children: handleSort ? /* @__PURE__ */ jsx18("button", { type: "button", onClick: handleSort, "aria-label": `Sort by ${label}`, children: wrapItems }) : wrapItems
    }
  );
}
function Td({ label, dot, icon, badge, buttons }) {
  return /* @__PURE__ */ jsx18("td", { className: "bg-white border-b border-stroke px-2 py-3", children: /* @__PURE__ */ jsxs14("div", { className: "flex text-base items-center gap-2", children: [
    dot && /* @__PURE__ */ jsx18("div", { "aria-hidden": "true", className: `${toneBase[dot]} w-2 h-2 rounded` }),
    icon && /* @__PURE__ */ jsx18(Icon, { icon }),
    label && /* @__PURE__ */ jsx18("span", { children: label }),
    badge && /* @__PURE__ */ jsx18(Badge, { tone: badge.tone, label: badge.label }),
    buttons && /* @__PURE__ */ jsx18("div", { className: "flex items-center gap-3", children: buttons.map((item, index) => /* @__PURE__ */ jsx18(
      Button,
      {
        size: "sm",
        variant: item.variant,
        label: item.label
      },
      index
    )) })
  ] }) });
}
export {
  Accordion,
  Alert,
  Avatar,
  Badge,
  BreadCrumb as Breadcrumb,
  Button,
  Card,
  Chip,
  Choice,
  ChoiceGroup,
  Collection,
  FabWrapper,
  Icon,
  Input,
  Modal,
  PageHeader,
  SegmentTab,
  Stepper,
  Tab,
  TabNav,
  Table,
  Td,
  Th,
  Well
};
