# Nervos Network 简介

Nervos Network 是由 Nervos 基金会推动发展的加密经济基础设施，是一个通过分层架构来解决[区块链不可能三角问题](https://github.com/ethereum/wiki/wiki/Sharding-FAQs#this-sounds-like-theres-some-kind-of-scalability-trilemma-at-play-what-is-this-trilemma-and-can-we-break-through-it)的项目。目前 Nervos Network 主要由 Layer 1 的公有链 CKB (Common Knowledge Base)，Layer 2 的应用链可选方案之一 AppChain，统一对等网络协议以及开放跨链协议组成。

在分层架构中，Layer 1 关注安全和信任，Layer 2 关注性能和商业应用，不同协议层解决不同的问题，同时各协议层均保持去中心化，共同构成一个去中心化、安全、高性能的加密经济网络，并通过开放跨链协议进行跨链资产流转与交换。

## Layer 1 / CKB

我们理想中的加密经济网络基础设施，应该是分层和解耦的架构，通过一组协议而不仅仅是一个协议来定义，底层是一个最小化的核心引擎，保障整个网络的安全和秩序。 CKB 的定位与设计目标即是加密经济网络的安全和信任基础。与性能相比，去中心化和安全是 CKB 更加看重的目标。为此，CKB 采取了如下的设计方案与优化措施：

- 采用更好的 PoW 算法和优化的 Nakamoto 共识协议
- 采用 Cell 模型取代账户模型
- 使用简单高效的 ckb-vm 虚拟机

PoW/Nakamoto 共识协议是经过实践证明最安全的共识协议。PoW 的特点是利用能耗这个不可逆转的绝对参量，将链外潜在的经济博弈引到链上以弥补链上博弈的不足。CKB对 PoW/Nakamoto 共识进行了优化，在最大化共识的去中心化程度的前提下，充分挖掘其性能潜力。Cell 模型是 CKB 使用的一种新的状态模型。账户模型中，账户记录代币 balance 和合约状态，区块和交易中包含的是导致状态迁移的事件，节点通过事件计算新的状态；Cell 模型中，每个代币都有独立的ID和面值，区块和交易中包含的是经过共识的新状态，新状态是在客户端/钱包计算生成，节点只负责状态迁移的验证。Cell 模型有如下优点：

1. 资产状态具有独立性，更适合在分层架构的协议层之间流通；
2. 计算和状态模型更加简单，有利于安全性；
3. 新状态由交易发起方生成，交易确定性更高；
4. 交易依赖关系明显，便于交易并发处理；
5. 对轻节点友好，同步交易即同步状态，无需额外计算。

关于 Cell 模型的更多描述可见 [Nervos CKB Whitepaper](https://github.com/NervosFoundation/binary/tree/master/whitepaper)。ckb-vm 是用于执行CKB智能合约的虚拟机。ckb-vm 以 RISC-V 开源指令集架构为基础，包含 RISC-V 指令集的软件实现，交易手续费模型以及激励模型。ckb-vm 以简单、安全、高效为设计目标，并能够通过 RISC-V 完善的工具链体系支持任意编程语言进行智能合约开发。

## Layer 2

Nervos Network 的 Layer 2 泛指基于 CKB 的上层协议，包括子链、状态通道甚至中心化服务。开发者可以在 Layer 2 上建构自己的应用，为用户提供高性能的加密经济服务。

Nervos AppChain 是 Layer 2 的一个开箱即用的子链项目。其核心是采用 CITA-BFT 共识协议的区块链 CITA。CITA 可以根据需求配置成联盟链或者公有链，并按需配置经济模型与治理模型。CITA 使用微服务架构，将共识、网络、虚拟机、验签计算等分成不同的微服务通过消息总线链接，这样节点性能不足时可以使用横向扩展方式简单地提升系统吞吐量。CITA 集成了 EVM 虚拟机，支持以太坊智能合约，同时也提供原生合约支持，允许开发者使用 golang 和 rust 语言编写智能合约。

除了区块链之外，AppChain 还为开发者提供了开发和运营区块链应用所需要的全套工具，包括区块浏览器 Microscope、区块数据缓存服务器 ReBirth、移动端钱包与 dApp 容器 Neuron、各个平台的 SDK 以及智能合约开发部署工具和 dApp 调试工具等组件。

AppChain 支持 Nervos 多链协议，该多链协议使得用户可以使用同一个账户地址访问多条 AppChain。
