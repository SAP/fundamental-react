import React from 'react';
import { ICommonProps } from '../common/common';

interface IListGroupProps extends ICommonProps {}

export function ListGroup(props: IListGroupProps): JSX.Element {
  const { children } = props;
  return <ul className="fd-list-group">{children}</ul>;
}

interface IListGroupItemProps extends ICommonProps {}

export function ListGroupItem(props: IListGroupItemProps): JSX.Element {
  const { children } = props;
  return <li className="fd-list-group__item">{children}</li>;
}

interface IListGroupItemActionsProps extends ICommonProps {}

export function ListGroupItemActions(
  props: IListGroupItemActionsProps
): JSX.Element {
  const { children } = props;
  return <span className="fd-list-group__action">{children}</span>;
}

interface IListGroupItemCheckboxProps extends ICommonProps {}

export function ListGroupItemCheckbox(
  props: IListGroupItemCheckboxProps
): JSX.Element {
  const { id, children } = props;
  return (
    <div className="fd-form__item fd-form__item--check">
      <label className="fd-form__label" htmlFor={id}>
        <input type="checkbox" className="fd-form__control" id={id} />
        {children}
      </label>
    </div>
  );
}
