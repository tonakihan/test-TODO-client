import React from "react";
import type { ComponentType, ReactElement, ReactNode } from "react";

/**
 * Finds the first child React element whose `displayName`
 * matches the `displayName` of the provided component.
 *
 * Commonly used when building Compound Components to filter
 * and render specific parts of the interface.
 *
 * @param children the child elements (JSX) to search through
 * @param component the target component used for matching
 * @returns the first matching child element, or `undefined`
 *
 * @example
 * const Header = ({ children }) => ...;
 * Header.displayName = "ParentComponent.Header";
 *
 * // Inside the parent component:
 * const header = findByType(props.children, Header);
 */
function findByType(children: ReactNode, component: ComponentType) {
  const result: Array<ReactNode> = [];
  const targetDisplayName = component.displayName;

  React.Children.forEach(children, (child) => {
    const childType = isValidComponent(child) && child.type.displayName;
    if (targetDisplayName === childType) result.push(child);
  });

  return result[0];
}

function isValidComponent(
  component: ReactNode,
): component is ReactElement<any, ComponentType & { displayName: string }> {
  return (
    React.isValidElement(component) &&
    typeof component.type !== "string" &&
    "displayName" in component.type
  );
}

export { findByType };
