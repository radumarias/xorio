# Passionate about `Rust`, and all `STEM`

<img src="website/resources/header2.png" style = "width: 100%; max-width: 1000px; height: auto;">

## This is me

[5th most active](https://committers.top/romania) GitHub user in Romania.  
And #1 for Rust language, as the ones above me are not developing in Rust.

[![committers.top badge](https://user-badge.committers.top/romania/radumarias.svg)](https://user-badge.committers.top/romania/radumarias)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hello@xorio.rs)
[![GitHub User's stars](https://img.shields.io/github/stars/radumarias)](https://github.com/radumarias)
<a href="https://join.slack.com/t/slack-rag8921/shared_invite/zt-2o4l1tdkk-VJeWIbO2p6zgeafDISPHbQ"><img src="website/resources/slack.png" style = "width: 87px; height: 20px;"/></a>
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@xorio42)
[![Matrix](https://img.shields.io/badge/matrix-000000?style=for-the-badge&logo=Matrix&logoColor=white)](https://matrix.to/#/@xorio42:matrix.org)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/xorio42)
[!![Discord](https://img.shields.io/discord/1287407534394835095)](https://discord.gg/WqRs5w8y)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/radumarias)
<a href="https://www.reddit.com/u/xorio42"><img src="website/resources/reddit2.png" style = "width: 87px; height: 20px;"/></a>
[![X (formerly Twitter)](https://img.shields.io/twitter/url?url=https%3A%2F%2Fx.com%2Fxorio42)](https://x.com/xorio42)

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=radumarias&count_private=true&show_icons=true&theme=default" alt="Radumarias's GitHub stats" />
</p>

> [!TIP]  
> **If you want to contribute to open source projects and learn `Rust`, `gRPC`, `REST API`, `tonic`, `diesel`, `sqlite`, `SurrealDB`, `tikv`, `Raft` protocol, `Mainline DHT`, `BitTorrent`, `QUIC`, `FUSE`, `Cryptography`, `Zero-copy`, `Apache Arrow`, `Flight`, `RDMA`, `Sharding algorithms`, `egui`, `Kotlin Multiplatform`, `Java`, `Spark`, `Flink`, `Airflow` and `Python`.**

1. An encrypted file system written in Rust that is mounted with FUSE on Linux. It can be used to create encrypted directories [rencfs](https://github.com/radumarias/rencfs) and the blog [series](https://medium.com/@xorio42/list/the-hitchhikers-guide-to-building-an-encrypted-filesystem-828492b94c23). It was the [crate of the week](https://this-week-in-rust.org/blog/2024/08/14/this-week-in-rust-560/#crate-of-the-week) in Aug 2024.  Read more about [how to contribute](https://github.com/radumarias/rencfs/blob/main/CONTRIBUTING.md), these applies to all projects
2. GUI in Rust with egui for the above [rencfs-desktop](https://github.com/radumarias/rencfs-desktop)
3. GUI in Kotlin Multiplatform with Compose for the above [rencfs-kotlin](https://github.com/radumarias/rencfs-kotlin)
4. And a daemon [rencfs-daemon](https://github.com/radumarias/rencfs-daemon)
5. Cloud file and email Sync, file Sharing, Backup and Encryption solution written in Rust [syncoxiders](https://github.com/radumarias/syncoxiders)
6. Distributed filesystem written in Rust. Intention is to be a learning project for the concepts and implementing them [rfs](https://github.com/radumarias/rfs). And the blog [series](https://medium.com/@xorio42/list/distributed-filesystem-written-in-rust-317d40f38304) of articles about building it
7. Operating system optimized for hosting a database system, taking advantage of new technologies and benefiting of the new hardware optimizations [dbos](https://github.com/radumarias/dbos)
8. Virtualization for GPU that allows you to run local GPU apps and the code is actually ran in the cloud, keeping your data local, without changing your app, at least not much [rvirt-gpu](https://github.com/radumarias/rvirt-gpu)
9. "Your wish is my command". A distributed executor service. [aladdin-executor](https://github.com/radumarias/aladdin-executor)
10. A Python encryption library implemented in Rust. It supports AEAD with AES-GCM and ChaCha20Poly1305. It uses ring crate to handle encryption [rencrypt-python](https://github.com/radumarias/rencrypt-python)
11. Securely clear secrets from memory. Built on stable Rust primitives which guarantee memory is zeroed using an operation will not be "optimized away" by the compiler [zeroize-python](https://github.com/radumarias/zeroize-python)
12. A GDrive client in Rust using fuse3 [gdrive-rs](https://github.com/radumarias/gdrive-rs)
13. A template for a Rust project using fuse3. It has a basic implementation of a filesystem with a single file with basic methods for a fs and the wrapper FUSE implementation. [rust-fuse3-template](https://github.com/radumarias/rust-fuse3-template)
14. Sample app for AWS Lambda with axum, DynamoDB, API Gateway and CloudWatch [aws-lambda-axum-dynamodb-template](https://github.com/radumarias/aws-lambda-axum-dynamodb-template)
15. A very basic implementation of an in-mem filesystem in Rust exposed with FUSE on Linux. It uses fuser crate to expose the system with FUSE [in-mem-fs](https://github.com/radumarias/in-mem-fs)
16. A basic benchmark of multiple Python crypto libs [python-crypto-benchmark](https://github.com/radumarias/python-crypto-benchmark)
17. Checks if the version in Cargo.toml has changed since last time the job runned for a Rust project. Useful in cases when you you want to automatically perform additional steps like creating a release and deploying/publishing the app if version is changed. [action-check-version-changed-rust](https://github.com/radumarias/action-check-version-changed-rust)


## Some of my projects

[![](website/resources/rencfs-logo-20p.png)](https://github.com/radumarias/rencfs) [rencfs](https://github.com/radumarias/rencfs)

An encrypted file system that is mounted with `FUSE` on Linux. It can be used to create encrypted directories.

You can then safely backup the encrypted folder on an untrusted server without worrying about the data being exposed. You can also store it in any cloud storage like Google Drive, Dropbox, etc. and have it synced across multiple devices.

You can use it as CLI or build your custom FUSE implementation with it.

The blog [series](https://medium.com/@xorio42/list/the-hitchhikers-guide-to-building-an-encrypted-filesystem-828492b94c23).

<img src="website/resources/rencfs-gui.png" style = "width: 100%; max-width: 1000px; height: auto;">

Video  
[![Watch the video](https://img.youtube.com/vi/MkWMS3Qmk1I/0.jpg)](https://youtu.be/MkWMS3Qmk1I)

<hr />

[![](website/resources/rfs2.png)](https://github.com/radumarias/rfs) [rfs](https://github.com/radumarias/rfs)

Distributed filesystem written in Rust. The intention is to be a learning and experimental project for the concepts involved in building such a system. The blog [series](https://medium.com/@xorio42/list/the-hitchhikers-guide-to-building-distributed-filesystem-317d40f38304).

[![](website/resources/syncoxiders-icon-16p.png)](https://syncoxide.rs) [SyncOxiders](https://syncoxide.rs)

Cloud file and email Sync, file Sharing, Backup and Encryption solution written in Rust.

The purpose of this project is to offer an easy and reliable way to sync files and emails between multiple providers and share files between multiple storage providers (like Google Drive, Dropbox, S3, SFTP servers, ...) and local files. Also simple way for backup of your files and emails and encryption. It offers real time sync (from simple Copy One-way to Two-way Sync) all handled in the cloud, without the explicit need of local clients.

<img src="website/resources/syncoxiders.png" style = "width: 100%; max-width: 1000px; height: auto;">

<hr />

[![](website/resources/rencfs-logo-20p.png)](https://github.com/radumarias/rencfs-desktop) [rencfs-desktop](https://github.com/radumarias/rencfs-desktop)

GUI for `rencfs`

Currently is working only on Linux, with plans to support macOS and Windows, Android and iOS in the future.

It uses:
`egui` with `eframe` for GUI
`tokio` for concurrency
`tonic` for `gRPC` communication between GUI and daemon
`diesel` with `Sqlite` for `ORM`

You can see a short video:  
[![Watch the video](https://img.youtube.com/vi/MkWMS3Qmk1I/0.jpg)](https://youtu.be/MkWMS3Qmk1I)

<hr />

[![](website/resources/rencfs-logo-20p.png)](https://github.com/radumarias/rencfs-daemon) [rencfs-daemon](https://github.com/radumarias/rencfs-daemon)

An encrypted file system in Rust that is mounted with `FUSE` on Linux. It can be used to create encrypted directories.

It uses rencfs and can be installed as a systemd service and configured via YAML files.  
You can define encrypted directories with their mount points, defined as vaults. It exposes a gRPC server to interract with, you can build your own custom GUI client over it.

<hr />

[![](website/resources/dbos2.png)](https://github.com/radumarias/dbos) [dbos](https://github.com/radumarias/dbos)

This is an operating system optimized for hosting a database system, taking advantage of new technologies and benefiting of the new hardware optimizations. The operating system will be designed to run a single workload, a database system, using the minimum possible resources for the operating system itself. The database system will be executed in kernel space, to avoid the overhead of context switching between user space and kernel space.

Everything will be written in Rust to ensure performance, safety and reliability.

<hr />

[rencrypt-python](https://github.com/radumarias/rencrypt-python)

A Python encryption library implemented in Rust. It supports AEAD with varius ciphers. It uses ring, RustCrypto (and derivates), sodiumoxide and orion to handle encryption.

If offers slightly higher speed compared to other Python libs, especially for small chunks of data (especially the Ring provider with AES-GCM ciphers). The API also tries to be easy to use but it's more optimized for speed than usability.  
So if you want to use a vast variaety of ciphers and/or achieve the highest possible encryption speed, consider giving it a try.

<img src="website/resources/rencrypt-python.png" style = "width: 100%; max-width: 1000px; height: auto;">

<hr />

[zeroize-python](https://github.com/radumarias/zeroize-python)

Securely clear secrets from memory. Built on stable Rust primitives which guarantee memory is zeroed using an operation will not be 'optimized away' by the compiler.

It uses zeroize crate under the hood to zeroize and memsec for mlock() and munlock(). Maximum you can mlock is 2662 KB.  
It can work with bytearray and numpy array.

<hr />

[gdrive-rs](https://github.com/radumarias/gdrive-rs)

A GDrive client in Rust using fuse3.

<hr />

[rust-fuse3-template](https://github.com/radumarias/rust-fuse3-template)

A template for a Rust project using `fuse3`.

It has a basic implementation of a filesystem with a single file with basic methods for a fs and the wrapper FUSE implementation.

<hr />

[aws-lambda-axum-dynamodb-template](https://github.com/radumarias/aws-lambda-axum-dynamodb-template)

Template app with `Aws Lambda`, `axum`, `DynamoDB`, `API Gateway` and `CloudWatch`.

<hr />

[in-mem-fs](https://github.com/radumarias/in-mem-fs)

A very basic implementation of an in-mem filesystem in Rust exposed with FUSE on Linux.

It uses `fuser` crate to expose the system with FUSE.

<hr />

[python-crypto-benchmark](https://github.com/radumarias/python-crypto-benchmark)

A basic benchmark of multiple Python crypto libs.

<hr />

[action-check-version-changed-rust](https://github.com/radumarias/action-check-version-changed-rust)

Checks if the version in Cargo.toml has changed since last time the job runned for a Rust project.

Useful in cases when you you want to automatically perform additional steps like creating a release and deploying/publishing the app if version is changed.
