/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bjp.org",
        port: "",
        pathname: "/**", //themes/bjp/images/
      },
      {
        protocol: "https",
        hostname: "mp-pledge.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/pebms/**",
      },
    ],
  },
};
export default nextConfig;
