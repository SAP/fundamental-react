import React from 'react';
import { storiesOf } from '@storybook/react';
import TreeView from '../TreeView';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|TreeView', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <TreeView>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 1</TreeView.Col>
                    </TreeView.Row>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 2</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 3</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>Grandchild 1</TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>Grandchild 2</TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
    ))
    .add('disable styles', () => (
        <TreeView disableStyles>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 1</TreeView.Col>
                    </TreeView.Row>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 2</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 3</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>Grandchild 1</TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>Grandchild 2</TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
    ))
    .add('custom styles', () => (
        <TreeView customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 1</TreeView.Col>
                    </TreeView.Row>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 2</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 3</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>Grandchild 1</TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>Grandchild 2</TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
    ));
