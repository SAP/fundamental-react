import Avatar from '../../Avatar/Avatar';
import Bar from '../Bar';
import Button from '../../Button/Button';
import React from 'react';
import Title from '../../Title/Title';

export default {
    title: 'Component API/Bar',
    component: Bar
};

export const primary = () => (<>
    <Bar
        leftComponents={[
            <Title>TEXT</Title>
        ]}
        middleComponents={[
            <Button compact glyph='email' />,
            <Button compact glyph='iphone' />,
            <Button compact glyph='notification-2' />
        ]}
        rightComponents={[
            <Avatar circle size='xs' />,
            <Button compact glyph='grid' />
        ]} />
</>);

export const cozy = () => (<>
    <Bar
        cozy
        leftComponents={[
            <Title>TEXT</Title>
        ]}
        middleComponents={[
            <Button glyph='email' />,
            <Button glyph='iphone' />,
            <Button glyph='notification-2' />
        ]}
        rightComponents={[
            <Avatar circle size='xs' />,
            <Button glyph='grid' />
        ]} />
</>);

export const header = () => (<>
    <Bar
        leftComponents={[
            <Title>TEXT</Title>
        ]}
        middleComponents={[
            <Button compact glyph='email' />,
            <Button compact glyph='iphone' />,
            <Button compact glyph='notification-2' />
        ]}
        rightComponents={[
            <Avatar circle size='xs' />,
            <Button compact glyph='grid' />
        ]}
        type='header' />
</>);

export const subheader = () => (<>
    <Bar
        leftComponents={[
            <Title>TEXT</Title>
        ]}
        middleComponents={[
            <Button compact glyph='email' />,
            <Button compact glyph='iphone' />,
            <Button compact glyph='notification-2' />
        ]}
        rightComponents={[
            <Avatar circle size='xs' />,
            <Button compact glyph='grid' />
        ]}
        type='subheader' />
</>);

export const headerWithSubheader = () => (<>
    <Bar
        leftComponents={[
            <Title>TEXT</Title>
        ]}
        middleComponents={[
            <Button compact glyph='email' />,
            <Button compact glyph='iphone' />,
            <Button compact glyph='notification-2' />
        ]}
        rightComponents={[
            <Avatar circle size='xs' />,
            <Button compact glyph='grid' />
        ]}
        type='header-with-subheader' />
    <Bar
        leftComponents={[
            <Title>TEXT</Title>
        ]}
        middleComponents={[
            <Button compact glyph='email' />,
            <Button compact glyph='iphone' />,
            <Button compact glyph='notification-2' />
        ]}
        rightComponents={[
            <Avatar circle size='xs' />,
            <Button compact glyph='grid' />
        ]}
        type='subheader' />
</>);

export const footer = () => (<>
    <Bar
        leftComponents={[
            <Title>TEXT</Title>
        ]}
        middleComponents={[
            <Button compact glyph='email' />,
            <Button compact glyph='iphone' />,
            <Button compact glyph='notification-2' />
        ]}
        rightComponents={[
            <Avatar circle size='xs' />,
            <Button compact glyph='grid' />
        ]}
        type='footer' />
</>);

export const floatingFooter = () => (<>
    <div style={{ position: 'relative' }} >
        <br /><br /><br />
        <Bar
            leftComponents={[
                <Title>TEXT</Title>
            ]}
            middleComponents={[
                <Button compact glyph='email' />,
                <Button compact glyph='iphone' />,
                <Button compact glyph='notification-2' />
            ]}
            rightComponents={[
                <Avatar circle size='xs' />,
                <Button compact glyph='grid' />
            ]}
            type='floating-footer' />
    </div>
</>);
