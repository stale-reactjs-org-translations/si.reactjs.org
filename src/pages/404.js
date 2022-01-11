/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import React from 'react';
import {sharedStyles} from 'theme';

type Props = {
  location: Location,
};

const PageNotFound = ({location}: Props) => (
  <Layout location={location}>
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.content}>
          <Header>Page Not Found</Header>
          <TitleAndMetaTags title="React - Page Not Found" />
          <div css={sharedStyles.markdown}>
            <p>ඔබ සෙවූ දෙය අපට මෙහිදී සොයාගත නොහැක.</p>
            <p>
              කරුණාකර ඔබව මෙම සම්පත් නිශ්චායකය වෙත යොමු කළ වෙබ් අඩවියේ හිමිකරු සම්බන්ධ කර මෙම යොමුව බිඳී ඇති බව දන්වන්න.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default PageNotFound;
