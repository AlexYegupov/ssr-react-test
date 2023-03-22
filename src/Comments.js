/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useData} from './data';



export default function Comments({ isVisible = false }) {
  const comments = ['c1', 'c2', 'c3'];

  if (!isVisible) {
    return ''
  }
  
  return (
    <>
      {comments.map((comment, i) => (
        <p className="comment" key={comment}>
          {comment}
        </p>
      ))}
    </>
  );
}
