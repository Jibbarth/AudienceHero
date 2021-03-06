// Taken from Admin-On-Rest.
// Licensed under the MIT license.
//
// Copyright (c) 2016-present, Francois Zaninotto, Marmelab
import assert from 'assert';
import React from 'react';

import translate from './translate';

describe('translate HOC', () => {
    it('should conserve base component default props', () => {
        const Component = () => <div />;
        Component.defaultProps = { foo: 'bar' };

        const TranslatedComponent = translate(Component);
        assert.deepEqual(TranslatedComponent.defaultProps, { foo: 'bar' });
    });
});
