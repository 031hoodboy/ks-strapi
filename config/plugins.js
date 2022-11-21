module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_0XEjelbxc9XT4li3BgUcAplysqqq/Zz2hQfv9AA",
      apiToken: "3NlVYoOjMTWIU1ckXuZfFLTl",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
