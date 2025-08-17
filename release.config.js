module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "docker build -t $IMAGE_NAME:${nextRelease.version} .",
        publishCmd: "docker push $IMAGE_NAME:${nextRelease.version}"
      }
    ]
  ],
};
