import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";

import "../index.css";

export const MenuItem = ({
  rootClass,
  label,
  description,
  iconName,
  isHighlighted = false,
  isActive = false,
  isSelected = false,
  isDisabled = false,
  isChecked = false,
  isFocused = false,
  isDrillIn = false,
  isCollapsible = false,
  isOpen = false,
  shouldTruncate,
  maxInlineSize,
  role = "menuitem",
  items = [],
  size,
  id,
  idx = 0,
  hasActions,
  selectionMode,
  value,
  ...globals
}) => {
  return html`
    <li
      class=${classMap({
        [`${rootClass}`]: true,
        "is-highlighted": isHighlighted,
        "is-active": isActive,
        "is-focused": isFocused,
        "is-selected": isSelected,
        "is-disabled": isDisabled,
        [`${rootClass}--drillIn`]: isDrillIn,
        [`${rootClass}--collapsible`]: isCollapsible,
        "is-open": isOpen,
      })}
      id=${ifDefined(id)}
      role=${ifDefined(role)}
      aria-selected=${isSelected ? "true" : "false"}
      aria-disabled=${isDisabled ? "true" : "false"}
      tabindex=${ifDefined(!isDisabled ? "0" : undefined)}>
      ${isCollapsible
        ? Icon({
            ...globals,
            iconName: "ChevronRight100",
            size,
            customClasses: [
              `${rootClass}Icon`,
              "spectrum-Menu-chevron",
            ],
          }) : ''}
      ${iconName
        ? Icon({
            ...globals,
            iconName,
            size,
            customClasses: [
              `${rootClass}Icon`,
              `${rootClass}Icon--workflowIcon`
            ]
          }) : ''}
      ${isCollapsible
        ? html`<span class="spectrum-Menu-sectionHeading ${shouldTruncate ? "spectrum-Menu-itemLabel--truncate" : "" }">${label}</span>`
        : ''
      }
      ${selectionMode != "multiple" && !isCollapsible
        ? html`<span class=${classMap({
          [`${rootClass}Label`]: true,
          ['spectrum-Switch-label']: hasActions,
          [`spectrum-Menu-itemLabel--truncate`]: shouldTruncate,
          })}>
          ${label}
        </span>`
        : ''}
      ${typeof description != "undefined"
        ? html`<span class="${rootClass}Description">${description}</span>`
        : ''}
      ${isDrillIn
        ? Icon({
            ...globals,
            iconName: "ChevronRight100",
            size,
            customClasses: [
              `${rootClass}Icon`,
              "spectrum-Menu-chevron",
            ],
          })
        : ''}
      ${when(selectionMode == "multiple", () =>  html`
        ${Checkbox({
          ...globals,
          size,
          isEmphasized: true,
          id,
          customClasses: [
            `${rootClass}Checkbox`,
          ],
        })}
         <span  class="spectrum-Menu-itemLabel ${shouldTruncate ? "spectrum-Menu-itemLabel--truncate" : "" }">${label}</span>
        `)}
      ${isChecked && selectionMode != "multiple"
        ? Icon({
            ...globals,
            iconName: "Checkmark100",
            size,
            customClasses: [
              `${rootClass}Icon`,
              "spectrum-Menu-checkmark",
            ],
          })
        : ''}
        ${value
          ? html`<span class="${rootClass}Value">${value}</span>`
          : ''}
        ${hasActions
          ? html`<div class="${rootClass}Actions">
          ${Switch({
              ...globals,
              size,
              label: null,
              id: `switch-${idx}`,
              customClasses: [
                `${rootClass}Switch`,
              ],
            })}
            </div>`
          : ''}
      ${isCollapsible && items.length > 0 ? Template({ ...globals, items, isOpen, size, shouldTruncate }) : ''}
    </li>
  `
};

export const MenuGroup = ({
  heading,
  id,
  idx = 0,
  items = [],
  isDisabled = false,
  isSelectable = false,
  shouldTruncate,
  maxInlineSize,
  subrole,
  size,
  ...globals
}) => html`
    <li
      id=${ifDefined(id)}
      role="presentation">
      ${heading
        ? html`<span
            class="spectrum-Menu-sectionHeading ${shouldTruncate ? "spectrum-Menu-itemLabel--truncate" : "" }"
            style=${maxInlineSize ? `max-inline-size: ${maxInlineSize}px;` : ""}
            id=${id ?? `menu-heading-category-${idx}`}
            aria-hidden="true"
            >${heading}</span
          >`
        : ""}
      ${Template({
        ...globals,
        role: "group",
        subrole,
        labelledby: id,
        items,
        isDisabled,
        isSelectable,
        shouldTruncate: true,
        maxInlineSize,
        size,
      })}
    </li>
  `;

export const Template = ({
  rootClass = "spectrum-Menu",
  labelledby,
  customClasses = [],
  customStyles = {},
  size,
  isDisabled = false,
  maxInlineSize,
  shouldTruncate,
  selectionMode = "none",
  isOpen = false,
  hasActions = false,
  items = [],
  role = "menu",
  subrole = "menuitem",
  id,
  ...globals
}) => {

  return html`
    <ul
      class=${classMap({
        [rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        "is-selectable": selectionMode === "single",
        "is-selectableMultiple": selectionMode === "multiple",
        "is-open": isOpen,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role=${ifDefined(role)}
      aria-labelledby=${ifDefined(labelledby)}
      aria-disabled=${isDisabled ? "true" : "false"}
      style=${maxInlineSize ? `max-inline-size: ${maxInlineSize}px;` : ""}
    >
      ${items.map((i, idx) => {
        if (i.type === "divider")
          return Divider({
            ...globals,
            tag: "li",
            size: "s",
            customClasses: [`${rootClass}-divider`],
          });
        else if (i.heading) return MenuGroup({ ...i, ...globals, subrole, size, selectionMode, shouldTruncate });
        else
          return MenuItem({
            ...globals,
            ...i,
            idx,
            rootClass: `${rootClass}-item`,
            role: subrole,
            size,
            selectionMode,
            shouldTruncate,
            hasActions,
          });
      })}
    </ul>
  `;
};
