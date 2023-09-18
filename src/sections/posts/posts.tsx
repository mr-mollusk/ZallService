import { useCallback, useRef, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { Post } from '@/shared/components';
import { useAppSelector } from '@/store/hooks';
import { selectPosts, usePostsActions } from '@/store/postsReducer';

const Posts = () => {
  const bottomAnchor = useRef<HTMLDivElement>(null);
  const posts = useAppSelector(selectPosts);
  const { deletePost } = usePostsActions();

  const handlePostDelete = useCallback(
    (id: number) => {
      return () => deletePost(id);
    },
    [deletePost],
  );

  useEffect(() => {
    if (posts.length && bottomAnchor.current) {
      bottomAnchor.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [posts.length]);

  return (
    <Stack>
      {posts.map((post) => (
        <Post key={post.id} {...post} onDelete={handlePostDelete(post.id)} />
      ))}
      <div ref={bottomAnchor} />
    </Stack>
  );
};

export { Posts };
