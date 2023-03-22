/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState, Suspense, lazy, startTransition, useCallback } from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import Html from './Html';
import Spinner from './Spinner';
import Spinner2 from './Spinner2';
import Layout from './Layout';
import NavBar from './NavBar';

//import Sidebar from './Sidebar';
const Sidebar = lazy(() => import('./Sidebar' /* webpackPrefetch: false */));

const Post = lazy(() => import('./Post' /* webpackPrefetch: false */));
const Comments = lazy(() => import('./Comments' /* webpackPrefetch: false */));

export default function App({assets}) {
  return (
    <Html assets={assets} title="Hello">
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={Error}>
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}

function Content() {
  const aa= useState(false)
  const commentsVisible = aa[0]
  const setCommentsVisible = aa[1]

  const buttonClicked = () => {
    setCommentsVisible(true)
  }

  return (
    <Layout>
      <NavBar />
      <aside className="sidebar">
        <Suspense fallback={<Spinner n={1} />}>
          <Sidebar />
        </Suspense>
      </aside>
      <article className="post">
        <Suspense fallback={<Spinner />}>
          <Post />
        </Suspense>
        <section className="comments">
          <h2>Comments</h2>
          <button onClick={buttonClicked} className="Button">
            activate
          </button>
          { commentsVisible &&
            <Suspense fallback={<Spinner />}>
              <Comments isVisible={commentsVisible} />
            </Suspense>
          }
        </section>
        <h2>Thanks for reading!</h2>
      </article>
    </Layout>
  );
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
    </div>
  );
}
