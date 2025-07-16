// 章节内容数据
const chapterContent = {
    preface: `
        <h1>前言 | 围巾哥萧尘 | Trae AI 从小白到大神的学习之路 🧣</h1>
        
        <p>大家好！我是围巾哥萧尘，一名 Rails 全栈工程师，也是 Trae AI 的超级体验官！欢迎拿起这本《Trae AI 从小白到大神的学习之路》，与我一起踏上 AI 编程的奇妙旅程！</p>
        
        <h2>围巾哥萧尘的成长故事：从普通程序员到 Trae AI 技术先锋</h2>
        <p>回想2018年，我还是一名普通的 Rails 开发者，每天在代码和 Bug 之间挣扎。那时候，编程对我来说既是热爱，也是挑战——复杂的需求、繁琐的调试、重复的配置，常常让我感到力不从心。</p>
        
        <p>直到2025年，我接触到了 Trae AI，这款由字节跳动打造的智能 IDE 彻底改变了我的开发方式。它不仅让我从繁重的重复工作中解放出来，还激发了我的创造力，让我能够快速实现从网页到游戏、从插件到移动应用的各种创意。</p>
        
        <h2>Trae AI 的魅力：为什么选择 Trae AI？</h2>
        <p>在2025年，AI 驱动的开发工具已经成为编程领域的风向标，而 Trae AI 无疑是其中的佼佼者。为什么 Trae AI 如此特别？以下是我总结的几大理由：</p>
        
        <h3>🤖 AI 赋能，编程更简单</h3>
        <p>Trae AI 内置了基于 Claude、GPT、DeepSeek、Grok 等的强大 AI 模型，能够理解自然语言输入，自动生成高质量代码。无论是写一个 Python 脚本、设计一个响应式网页，还是开发一个 3D 游戏，Trae AI 都能让你事半功倍。</p>
        
        <h3>🔧 一站式开发体验</h3>
        <p>从代码编写到版本管理（Git 智能体）、从环境配置（MCP）到项目部署（Vercel、EdgeoneMCP），Trae AI 提供了一站式的开发流程。你无需频繁切换工具，所有的功能都在一个平台内无缝衔接。</p>
        
        <h3>🎨 多场景支持，创意无限</h3>
        <p>Trae AI 支持网页开发、游戏开发（Godot、Unity）、3D 建模（BlenderMCP）、UI/UX 设计（FigmaMCP）以及多媒体处理（MiniMax MCP）。无论你是想开发一个 Chrome 插件、一个微信小程序，还是一个 3D 动画，Trae AI 都能助你一臂之力。</p>
        
        <h2>本书的目标</h2>
        <p>这本书的目标是帮助你从零基础到精通 Trae AI，成为一名能够驾驭 AI 编程的开发者。具体来说，本书将实现以下目标：</p>
        
        <ul>
            <li><strong>零基础入门：</strong>通过详细的安装指南、基础教程和实战案例，帮助编程新手快速上手 Trae AI。</li>
            <li><strong>进阶提升：</strong>为有一定经验的开发者提供高级功能的深入讲解，助力效率提升。</li>
            <li><strong>项目实战：</strong>通过真实案例，带你从需求分析到部署上线的全流程。</li>
            <li><strong>社区与未来：</strong>分享 Trae AI 社区的资源和经验，展望 AI 编程的未来趋势。</li>
        </ul>
        
        <h2>围巾哥的寄语</h2>
        <p>编程是一场奇妙的冒险，而 Trae AI 是你最可靠的伙伴。回想我从一个普通程序员到 Trae AI 技术先锋的旅程，最大的感悟是：<strong>大胆尝试，勇于创新</strong>。</p>
        
        <p>准备好了吗？让我们翻开下一页，正式进入 Trae AI 的世界！从第一章开始，我们将一起探索 Trae AI 的核心功能，解锁 AI 编程的无限可能。跟着我，一起从"小白"成长为"大神"吧！🧣</p>
    `,
    
    chapter1: `
        <h1>第一章：Trae AI 软件介绍</h1>
        
        <p>Trae AI 是一款旨在开启 AI 编程新纪元的软件。它提供了一个强大的集成开发环境（IDE）或编辑器，通过人工智能技术辅助用户进行编程。</p>
        
        <h2>1.1 Trae AI 核心功能</h2>
        <p>Trae AI 的核心功能在于其 AI 辅助编程能力，用户可以利用其内置的模型来生成代码，例如生成一个贪吃蛇的小游戏。Trae 的主要操作是下载其编辑器。</p>
        
        <p>Trae 提供不同版本的服务，其中用户对模型的访问权限和体验流畅度存在显著差异：</p>
        
        <h3>免费用户（Free）</h3>
        <ul>
            <li>每月有 10 次快速请求</li>
            <li>每月有 50 个高级模型快速请求</li>
            <li>每月有 1000 个高级模型请求</li>
            <li>每月有 5000 次自动完成请求</li>
            <li>免费用户虽然可以使用模型，但通常需要排队等待</li>
        </ul>
        
        <h3>专业版用户（Pro）</h3>
        <ul>
            <li>享有每月 600 个快速请求</li>
            <li>享有无限的高级模型快速请求</li>
            <li>享有无限的高级模型请求</li>
            <li>享有无限的自动完成请求</li>
            <li>成为 Pro 用户后，可以真正地使用所有的模型，达到"丝滑"的状态</li>
        </ul>
        
        <h2>1.2 Trae AI 安装方法</h2>
        <p>Trae AI 提供国际版和国内版两种安装方式。</p>
        
        <h3>国际版安装</h3>
        <ol>
            <li><strong>下载：</strong>前往 Trae 的官方网站（国际版）点击下载其编译器</li>
            <li><strong>安装：</strong>下载完成后，打开安装包，将 Trae 的图标拖拽到应用程序文件夹中</li>
            <li><strong>首次启动设置：</strong>选择界面"格调"（暗色、深蓝、亮色），选择语言</li>
            <li><strong>登录：</strong>支持使用 Google 账号或 GitHub 账号进行登录</li>
        </ol>
        
        <h3>国内版安装</h3>
        <ol>
            <li><strong>下载：</strong>通过 Trae 的 .cn 域名找到并下载其 IDE</li>
            <li><strong>安装：</strong>安装逻辑体系与国际版相似</li>
            <li><strong>登录：</strong>支持使用手机号或掘金账号进行登录</li>
            <li><strong>差异：</strong>国内版的模型是免费的，但在编程领域能力可能稍弱一些</li>
        </ol>
        
        <h2>1.3 Trae Pro 版本购买与激活</h2>
        <p>成为 Trae Pro 用户可以显著提升使用体验，解锁所有模型的无限制访问。</p>
        
        <h3>Pro 版本优势</h3>
        <ul>
            <li>解锁所有模型：付费用户可以真正地使用所有的模型，达到"丝滑"的运行状态</li>
            <li>无需排队：与免费用户不同，Pro 用户在使用模型时无需排队等待</li>
            <li>请求额度大幅提升：提供了无限或极高的额度</li>
        </ul>
        
        <h3>购买流程与费用</h3>
        <ul>
            <li><strong>首次购买优惠：</strong>第一次购买可以享受到 3 美元（约合人民币 21 元）的优惠</li>
            <li><strong>续费：</strong>从第二个月开始，Pro 版本每月会收费 10 美元</li>
            <li><strong>年费版本：</strong>年费专业版每年费用约为 7.5 美元/月，折合人民币约 600 多元</li>
            <li><strong>支付方式：</strong>可以选择支付宝等支付方式进行支付</li>
        </ul>
        
        <p><strong>注意：</strong>Trae Pro 采用连续付费模式。如果不想在第二个月继续付费，需要提前在支付平台中取消订阅。</p>
    `,
    
    chapter2: `
        <h1>第二章：代码仓库管理</h1>
        
        <p>在本章中，我将深入探讨如何利用 Trae AI 的 Git 智能体进行高效的代码版本管理，并分享团队协作的最佳实践。</p>
        
        <h2>2.1 Trae AI Git 智能体概述</h2>
        <p>版本控制是软件开发的核心环节，它能帮助我们追踪代码变更、回溯历史版本、协同开发，并有效管理不同功能的开发分支。</p>
        
        <p>Trae AI 通过其强大的 Git 智能体，将 Git 和 GitHub 的功能无缝集成到开发环境中，实现了从代码编写到版本管理的一站式开发流程。</p>
        
        <h2>2.2 配置 Trae AI 中的 Git 智能体</h2>
        <p>要开始使用 Trae AI 的 Git 智能体，你需要进行一些初始设置。</p>
        
        <h3>添加 Git 和 GitHub MCPs</h3>
        <ol>
            <li>进入 Trae AI 界面，选择添加 MCP</li>
            <li>从市场中找到并添加 git MCP</li>
            <li>同样地，找到并添加 github MCP</li>
        </ol>
        
        <h3>生成和配置 GitHub Token</h3>
        <p>为了让 Trae AI 能够安全地访问和操作你的 GitHub 仓库，你需要生成一个 GitHub Personal Access Token。</p>
        
        <h4>生成 Token 的步骤：</h4>
        <ol>
            <li>登录你的 GitHub 账户</li>
            <li>导航到"Settings" → "Developer settings" → "Personal access tokens" → "Tokens (classic)"</li>
            <li>点击"Generate new token"或"Generate new token (classic)"</li>
            <li>给你的 Token 起一个有意义的名称（例如：TraeAI_Git_Token）</li>
            <li>选择正确的权限（Scopes），特别是与代码仓库操作相关的权限</li>
            <li>生成后，立即复制并妥善保存此 Token</li>
        </ol>
        
        <h3>创建和配置 Git 智能体</h3>
        <ol>
            <li>在 Trae AI 中创建新的智能体</li>
            <li>选择与 Git 相关的功能模板</li>
            <li>配置仓库地址：填入你的远程 GitHub 仓库的正确地址</li>
        </ol>
        
        <h2>2.3 使用 Git 智能体进行代码版本管理</h2>
        <p>一旦 Git 智能体配置完成，你就可以开始利用它来管理你的代码。</p>
        
        <h3>初始化本地仓库</h3>
        <p>在进行任何推送操作之前，至关重要的一步是在本地项目目录中初始化 Git 仓库。Trae AI 的 Git 智能体需要检测到本地存在 Git 仓库才能正常工作。</p>
        
        <h3>提交代码变更</h3>
        <p>在你对代码进行修改后，这些修改首先存在于你的"工作区"（Working Directory）。要将这些修改纳入版本控制，你需要将其"提交"（Commit）到 Git 仓库中。</p>
        
        <p><strong>注意：</strong>仅仅保存文件是不够的，你必须明确地执行提交操作，才能将更改记录到 Git 仓库的历史中。</p>
        
        <h3>推送本地仓库到远程</h3>
        <p>当你在本地完成代码提交后，你需要将其"推送"（Push）到远程 GitHub 仓库，以便你的团队成员也能获取到最新的代码，或者将其部署。</p>
        
        <h2>2.4 团队协作的最佳实践</h2>
        <p>Git 和 Trae AI 的 Git 智能体为团队协作提供了强大的支持。</p>
        
        <h3>分支管理</h3>
        <p>分支是团队协作的核心。团队成员可以在各自的分支上独立开发新功能或修复 Bug，而不会影响到主线代码。</p>
        
        <ul>
            <li><strong>创建新分支：</strong>Trae AI 的 Git 智能体支持创建新的开发分支</li>
            <li><strong>合并分支：</strong>当一个功能开发完毕后，需要将其合并回主分支</li>
        </ul>
        
        <h3>Git 智能体的分享与复用</h3>
        <p>Trae AI 允许用户分享他们自己创建和配置的智能体。这对于团队协作来说是一个非常有用的功能：</p>
        
        <ul>
            <li>团队中的资深成员可以配置好 Git 智能体，并将其分享给其他成员</li>
            <li>分享时，务必注意隐私安全，确保移除了敏感信息，特别是你的 GitHub Token</li>
        </ul>
        
        <h2>2.5 经验总结与常见问题</h2>
        <p>在代码管理与 Git 集成的过程中，以下是一些值得注意的经验和常见问题：</p>
        
        <ul>
            <li><strong>本地仓库初始化：</strong>确保在进行任何 Git 操作之前，你的本地项目目录已经成功初始化为 Git 仓库</li>
            <li><strong>仓库地址准确性：</strong>仔细检查你在 Git 智能体中填写的远程仓库地址是否完全正确</li>
            <li><strong>GitHub Token 有效性：</strong>确保你的 GitHub Token 仍然有效，并且具有足够的权限</li>
            <li><strong>提交更改：</strong>记住，文件保存到工作区并不等于提交到 Git 仓库</li>
            <li><strong>AI 辅助与人工判断：</strong>在关键的合并、冲突解决等环节，仍需人类的判断和干预</li>
        </ul>
        
        <p>通过本章的学习，你应该已经掌握了在 Trae AI 中使用 Git 智能体进行代码版本管理的基本方法和团队协作的最佳实践。</p>
    `,
    
    chapter3: `
        <h1>第三章：项目部署基础</h1>
        
        <p>本章将深入探讨如何在 Trae AI 中完成项目的部署工作，重点介绍 EdgeoneMCP 和 Vercel 这两大主流部署平台的配置与使用，旨在帮助你轻松实现网页和 H5 游戏的上线。</p>
        
        <h2>EdgeoneMCP：快速部署网页应用</h2>
        <p>EdgeoneMCP 是 Trae AI 支持的一种部署方案，尤其适用于快速上线网页项目。通过 Trae AI 的智能化能力，网页的开发和部署流程变得前所未有的简便。</p>
        
        <h3>AI 驱动的网页生成</h3>
        <p>在 Trae AI 中，你可以利用其内置的强大 AI 模型，通过自然语言输入来自动生成高质量的网页代码。</p>
        
        <p>例如，你只需对 Trae AI 说"帮我依据比赛文档写一个比赛网页"，它便能自动生成完整的 HTML 代码，并附带优化建议。这种方式极大地加速了网页开发的初期阶段。</p>
        
        <h3>Git 智能体进行版本管理</h3>
        <p>完成网页的开发和设计后，你需要将项目代码进行版本管理。Trae AI 内置的 Git 智能体（Git Agent）能够帮助你轻松地将本地项目推送到远程 GitHub 仓库。</p>
        
        <p>这个过程速度较快，确保你的代码得到有效管理和备份。</p>
        
        <h3>EdgeoneMCP 配置与部署</h3>
        <p>一旦代码推送到 GitHub 仓库，你就可以利用 EdgeoneMCP（例如腾讯的 MCP HP page，一个 MCP 实例）来完成网站的部署。</p>
        
        <p>你需要根据项目需求对 MCP 进行配置。这个配置过程在 Trae AI 中也是高度集成的，能够非常迅速地帮助你完成网页的部署，使其能够在线访问。</p>
        
        <h2>Vercel：轻松部署 H5 游戏</h2>
        <p>对于 H5 游戏这类富媒体应用，Vercel 则是 Trae AI 推荐的另一个高效部署平台。Trae AI 结合 Godot 等游戏引擎，能够简化 H5 游戏的开发和部署流程。</p>
        
        <h3>游戏开发与导出</h3>
        <p>在 Trae AI 的辅助下，你可以使用 Godot 等游戏引擎开发 H5 游戏，例如经典的"打砖块"游戏。</p>
        
        <p>完成游戏开发后，关键一步是将 Godot 项目导出为 Web Build (WB) 格式。这个导出过程在 Godot 中相对直接，为后续的在线部署做准备。</p>
        
        <h3>服务器环境要求</h3>
        <p>需要特别注意的是，导出的 H5 游戏文件（如 index.html）并不能像普通网页一样直接在本地浏览器中通过双击打开和运行。</p>
        
        <p>H5 游戏必须通过服务器才能被访问和正常运行。在本地测试时，可以使用类似于 Servez 的服务器来运行，而在线访问则需要专业的部署平台。</p>
        
        <h3>Git 仓库上传</h3>
        <p>将导出的 Web Build (WB) 文件上传到 GitHub 仓库是部署前的重要步骤。通过 Trae AI 的 Git 集成功能，你可以方便地完成这一操作。</p>
        
        <h3>Vercel 部署</h3>
        <p>一旦你的 H5 游戏 WB 文件上传到 GitHub 仓库，你就可以将其部署到 Vercel。</p>
        
        <p>Vercel 提供了一种简单、快速的部署体验，能够将你的 GitHub 仓库与部署服务连接起来，从而让你的 H5 游戏在网络端被广泛访问。</p>
        
        <h3>小贴士</h3>
        <p>在部署过程中，有时可能会遇到字体无法识别的问题，这通常可以通过下载并使用特定的免费字体（如凤凰点证免费字体）来解决。</p>
        
        <h2>部署流程总结</h2>
        <p>尽管整个流程在 Trae AI 的帮助下看似快速和自动化，但从本地项目开发、通过 Git 智能体推送到远程仓库，再到最终在 Vercel 等平台实现在线访问，这整套流程的真正掌握仍需要一定的学习和实践。</p>
        
        <h3>网页部署流程：</h3>
        <ol>
            <li>使用 Trae AI 生成网页代码</li>
            <li>通过 Git 智能体推送到 GitHub</li>
            <li>配置 EdgeoneMCP 进行部署</li>
            <li>网站上线，可在线访问</li>
        </ol>
        
        <h3>H5 游戏部署流程：</h3>
        <ol>
            <li>使用 Godot 等引擎开发游戏</li>
            <li>导出为 Web Build 格式</li>
            <li>上传到 GitHub 仓库</li>
            <li>通过 Vercel 部署上线</li>
        </ol>
        
        <h2>总结</h2>
        <p>Trae AI 及其对 EdgeoneMCP 和 Vercel 的深度集成，极大地简化了网页和 H5 游戏从开发到部署的整个流程。它赋予开发者更强的能力，使得创意能够更快地从概念变为可访问的在线项目。</p>
        
        <p>无论你的目标是开发一个酷炫的个人项目，还是参加 AI 编程比赛，掌握这些部署技巧都将是你迈向"大神"之路的关键一步。建议你在阅读本书第三部分的项目实战案例时，结合本章所学知识进行动手实践，以加深理解和熟练运用。</p>
    `
};

// 平滑滚动函数
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 模态框功能
const modal = document.getElementById('chapterModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// 章节卡片点击事件
document.addEventListener('DOMContentLoaded', function() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    chapterCards.forEach(card => {
        card.addEventListener('click', function() {
            const chapterKey = this.getAttribute('data-chapter');
            const content = chapterContent[chapterKey];
            
            if (content) {
                modalContent.innerHTML = content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 章节卡片悬停效果增强
document.addEventListener('DOMContentLoaded', function() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    chapterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 评论系统数据
let comments = [
    {
        id: 1,
        author: "张小明",
        email: "zhangxm@example.com",
        rating: 5,
        text: "这本书真的太棒了！作为一个编程新手，我通过这本书快速上手了 Trae AI。围巾哥的讲解非常详细，每个步骤都有截图和代码示例。特别是第二章的 Git 智能体配置，让我这个 Git 小白也能轻松管理代码版本。强烈推荐给所有想学习 AI 编程的朋友！",
        date: "2025-01-10",
        likes: 23,
        liked: false,
        replies: [
            {
                id: 101,
                author: "李小红",
                text: "同感！我也是通过这本书入门的，现在已经能独立开发小项目了。",
                date: "2025-01-11"
            }
        ]
    },
    {
        id: 2,
        author: "王开发",
        email: "wangkf@example.com",
        rating: 5,
        text: "作为一名有5年经验的前端开发者，我原本对 AI 编程工具持怀疑态度。但是看了围巾哥的这本书后，完全改变了我的看法。Trae AI 的确能大幅提升开发效率，特别是在快速原型开发方面。书中的实战案例都很实用，我已经用 Trae AI 完成了两个项目的开发。",
        date: "2025-01-08",
        likes: 18,
        liked: false,
        replies: []
    },
    {
        id: 3,
        author: "刘学生",
        email: "liuxs@example.com",
        rating: 4,
        text: "内容很丰富，讲解也很清楚。不过我觉得第三章的部署部分可以再详细一些，特别是 Vercel 的配置步骤。总体来说是一本很好的入门书籍，推荐给同学们！",
        date: "2025-01-05",
        likes: 12,
        liked: false,
        replies: [
            {
                id: 301,
                author: "围巾哥萧尘",
                text: "感谢反馈！我会在下个版本中补充更多部署细节。你可以先参考我在掘金社区发布的补充教程。",
                date: "2025-01-06"
            }
        ]
    },
    {
        id: 4,
        author: "陈程序员",
        email: "chencxy@example.com",
        rating: 5,
        text: "围巾哥的经验分享太有价值了！从普通程序员到 Trae AI 技术先锋的成长历程很励志。书中提到的各种 MCP 配置和实战技巧都很实用，我现在每天都在用 Trae AI 开发。期待后续章节的更新！",
        date: "2025-01-03",
        likes: 31,
        liked: false,
        replies: []
    },
    {
        id: 5,
        author: "赵设计师",
        email: "zhaosjs@example.com",
        rating: 4,
        text: "虽然我主要做UI设计，但这本书让我对 AI 编程产生了浓厚兴趣。特别是看到 Trae AI 可以结合 FigmaMCP 进行设计开发一体化，真的很酷！已经开始学习相关技能了。",
        date: "2025-01-01",
        likes: 8,
        liked: false,
        replies: []
    }
];

let currentRating = 0;
let displayedComments = 3; // 初始显示的评论数量

// 评论系统初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeCommentSystem();
    renderComments();
    updateNavigation();
});

// 初始化评论系统
function initializeCommentSystem() {
    // 评分输入功能
    const starInputs = document.querySelectorAll('.star-input');
    starInputs.forEach((star, index) => {
        star.addEventListener('click', function() {
            currentRating = index + 1;
            updateStarDisplay();
        });
        
        star.addEventListener('mouseenter', function() {
            highlightStars(index + 1);
        });
    });
    
    // 鼠标离开评分区域时恢复当前评分显示
    document.querySelector('.rating-input').addEventListener('mouseleave', function() {
        updateStarDisplay();
    });
    
    // 评论表单提交
    document.getElementById('commentForm').addEventListener('submit', handleCommentSubmit);
    
    // 排序功能
    document.getElementById('sortComments').addEventListener('change', handleSortChange);
    
    // 加载更多评论
    document.getElementById('loadMoreBtn').addEventListener('click', loadMoreComments);
}

// 更新星星显示
function updateStarDisplay() {
    const starInputs = document.querySelectorAll('.star-input');
    starInputs.forEach((star, index) => {
        if (index < currentRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// 高亮星星（鼠标悬停效果）
function highlightStars(rating) {
    const starInputs = document.querySelectorAll('.star-input');
    starInputs.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#fbbf24';
        } else {
            star.style.color = '#d1d5db';
        }
    });
}

// 处理评论提交
function handleCommentSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userName = formData.get('userName').trim();
    const userEmail = formData.get('userEmail').trim();
    const commentText = formData.get('commentText').trim();
    
    // 验证表单
    if (!userName || !commentText || currentRating === 0) {
        alert('请填写必填项并选择评分！');
        return;
    }
    
    // 创建新评论
    const newComment = {
        id: Date.now(),
        author: userName,
        email: userEmail,
        rating: currentRating,
        text: commentText,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        liked: false,
        replies: []
    };
    
    // 添加到评论列表开头
    comments.unshift(newComment);
    
    // 重新渲染评论
    renderComments();
    
    // 重置表单
    e.target.reset();
    currentRating = 0;
    updateStarDisplay();
    
    // 显示成功消息
    showNotification('评论发表成功！', 'success');
    
    // 滚动到评论列表
    document.getElementById('commentsList').scrollIntoView({ behavior: 'smooth' });
}

// 渲染评论列表
function renderComments() {
    const commentsList = document.getElementById('commentsList');
    const commentsToShow = comments.slice(0, displayedComments);
    
    commentsList.innerHTML = commentsToShow.map(comment => `
        <div class="comment-item" data-comment-id="${comment.id}">
            <div class="comment-header">
                <div class="comment-author">
                    <div class="author-avatar">${comment.author.charAt(0)}</div>
                    <div class="author-info">
                        <h4>${comment.author}</h4>
                        <div class="comment-date">${formatDate(comment.date)}</div>
                    </div>
                </div>
                <div class="comment-rating">
                    ${generateStars(comment.rating)}
                </div>
            </div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-actions">
                <button class="comment-action ${comment.liked ? 'liked' : ''}" onclick="toggleLike(${comment.id})">
                    <span>${comment.liked ? '❤️' : '🤍'}</span>
                    <span>${comment.likes}</span>
                </button>
                <button class="comment-action" onclick="toggleReplyForm(${comment.id})">
                    <span>💬</span>
                    <span>回复</span>
                </button>
            </div>
            <div class="reply-form" id="replyForm-${comment.id}">
                <textarea placeholder="写下你的回复..." id="replyText-${comment.id}"></textarea>
                <div class="reply-actions">
                    <button class="reply-btn" onclick="submitReply(${comment.id})">发表回复</button>
                    <button class="cancel-btn" onclick="cancelReply(${comment.id})">取消</button>
                </div>
            </div>
            ${comment.replies.length > 0 ? `
                <div class="replies">
                    ${comment.replies.map(reply => `
                        <div class="reply-item">
                            <div class="comment-author">
                                <div class="author-avatar">${reply.author.charAt(0)}</div>
                                <div class="author-info">
                                    <h4>${reply.author}</h4>
                                    <div class="comment-date">${formatDate(reply.date)}</div>
                                </div>
                            </div>
                            <div class="comment-text">${reply.text}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
    
    // 更新评论计数
    document.querySelector('.comments-header h3').textContent = `所有评论 (${comments.length})`;
    
    // 更新加载更多按钮
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedComments >= comments.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// 生成星星评分显示
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? 'filled' : ''}">${i <= rating ? '★' : '☆'}</span>`;
    }
    return stars;
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
        return '今天';
    } else if (diffDays === 2) {
        return '昨天';
    } else if (diffDays <= 7) {
        return `${diffDays - 1}天前`;
    } else {
        return date.toLocaleDateString('zh-CN');
    }
}

// 切换点赞状态
function toggleLike(commentId) {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.liked = !comment.liked;
        comment.likes += comment.liked ? 1 : -1;
        renderComments();
    }
}

// 切换回复表单显示
function toggleReplyForm(commentId) {
    const replyForm = document.getElementById(`replyForm-${commentId}`);
    replyForm.classList.toggle('active');
    
    if (replyForm.classList.contains('active')) {
        document.getElementById(`replyText-${commentId}`).focus();
    }
}

// 提交回复
function submitReply(commentId) {
    const replyText = document.getElementById(`replyText-${commentId}`).value.trim();
    
    if (!replyText) {
        alert('请输入回复内容！');
        return;
    }
    
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        const newReply = {
            id: Date.now(),
            author: "匿名用户", // 实际应用中应该获取当前用户信息
            text: replyText,
            date: new Date().toISOString().split('T')[0]
        };
        
        comment.replies.push(newReply);
        renderComments();
        showNotification('回复发表成功！', 'success');
    }
}

// 取消回复
function cancelReply(commentId) {
    const replyForm = document.getElementById(`replyForm-${commentId}`);
    replyForm.classList.remove('active');
    document.getElementById(`replyText-${commentId}`).value = '';
}

// 处理排序变化
function handleSortChange(e) {
    const sortType = e.target.value;
    
    switch (sortType) {
        case 'newest':
            comments.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            comments.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'highest':
            comments.sort((a, b) => b.rating - a.rating);
            break;
        case 'lowest':
            comments.sort((a, b) => a.rating - b.rating);
            break;
    }
    
    renderComments();
}

// 加载更多评论
function loadMoreComments() {
    displayedComments += 3;
    renderComments();
}

// 显示通知消息
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 更新导航菜单
function updateNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    
    // 添加评论链接到导航菜单
    const commentsLink = document.createElement('li');
    commentsLink.innerHTML = '<a href="#comments">评论</a>';
    navMenu.appendChild(commentsLink);
}

// 响应式导航菜单（移动端）
document.addEventListener('DOMContentLoaded', function() {
    // 如果需要添加移动端汉堡菜单，可以在这里实现
    const navMenu = document.querySelector('.nav-menu');
    
    // 检测屏幕尺寸变化
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            // 移动端逻辑
            navMenu.style.display = 'none';
        } else {
            // 桌面端逻辑
            navMenu.style.display = 'flex';
        }
    }
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});