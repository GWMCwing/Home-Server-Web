import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

type PageConfig = {
  title: string;
  path: string;
  disabled?: boolean;
};

const pages: PageConfig[] = [
  { title: 'Home', path: '/' },
  { title: 'Gallery', path: '/gallery', disabled: true },
  { title: 'Demo', path: '/demo', disabled: true },
  { title: 'About', path: '/about', disabled: true },
];

function PageLink({ title, path, disabled }: PageConfig) {
  const isDisabled = disabled ?? false;
  const text = (
    <Typography
      noWrap
      sx={{
        mx: 2,
        // pointerEvents: isDisabled ? 'none' : 'auto',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        color: isDisabled ? 'status.disabled' : 'Typography.color',
        fontWeight: isDisabled ? 'small' : 'bold',
        '&:hover': {
          textShadow: isDisabled ? 'none' : '0 0 1px #00ff37',
        },
      }}
    >
      {title}
    </Typography>
  );
  return isDisabled ? text : <Link href={path}> {text} </Link>;
}

export default function PageLinkList() {
  return (
    <>
      {pages.map((page) => (
        <PageLink key={page.path} {...page} />
      ))}
    </>
  );
}
