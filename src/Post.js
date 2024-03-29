/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import R from 'react';

export default function Post() {
  const [isOk, setIsOk] = R.useState(false);
  const buttonClicked = () => setIsOk(!isOk)

  return (
    <>
      <h1>The post</h1>
      <p>
        This demo is <b>artificially slowed down</b>. Open{' '}
        <code>server/delays.js</code> to adjust how much different things are
        slowed down.
      </p>
      <p>
        Notice how HTML for comments "streams in" before the JS (or React) has
        loaded on the page.
      </p>
      <p>
        Also notice that the JS for comments and sidebar has been code-split,
        but HTML for it is still included in the server output.
      </p>
      <button onClick={buttonClicked}>{isOk ? '1' : '2'}</button>
    </>
  );
}
