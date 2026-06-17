# Zetazi Landing Page

Static landing page for `zetazi.com`, intended for GitHub Pages.

## Deploy

1. Push this repository to GitHub.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `Deploy from a branch`, branch `main`, folder `/root`.
4. Keep `zetazi.com` as the custom domain. The `CNAME` file is already included.

## Cloudflare DNS

For an apex domain on GitHub Pages, Cloudflare should point `zetazi.com` to GitHub Pages with `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

You can also add GitHub Pages `AAAA` records for IPv6:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Add a `CNAME` record for `www` pointing to `zetaziai.github.io` if you also want `www.zetazi.com`.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
