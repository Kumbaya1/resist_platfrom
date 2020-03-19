import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { Title, SectionTitle, SectionText, SectionTitleNum, ReturnHome, SectionSubTitle, GrayText, NorText } from "./styled"
// import Plate from "../../components/Plate"
import img_0 from "../../assets/images/about/2/0.jpg"
import img_1 from "../../assets/images/about/2/1.jpg"
import img_2 from "../../assets/images/about/2/2.jpg"
import img_3 from "../../assets/images/about/2/3.jpg"
import img_4 from "../../assets/images/about/2/4.jpg"
import img_1_1 from "../../assets/images/about/2/1_1.jpg"
import img_2_2 from "../../assets/images/about/2/2_2.jpg"
import img_3_3 from "../../assets/images/about/2/3_3.jpg"
import img_4_4 from "../../assets/images/about/2/4_4.jpg"
import img_ewm from "../../assets/images/about/2/ewm.jpg"
// import zhibiaotushi from "../../assets/images/about/zhibiaotushi.png"
// import chuachuanbofengxiannbo from "../../assets/images/about/1.png"
// import yiliaoziyuan from "../../assets/images/about/2.png"
// import fuwuzhili from "../../assets/images/about/3.png"
// import jumingoucheng from "../../assets/images/about/4.png"
function About(props) {
    return (
        <Fragment>
            <WhiteSpace size="sm" />
            <Title>《北京社区疫情抵抗力地图2.0》</Title>
            <SectionText style={{ textAlign: "center" }} >大家关心的问题与解答</SectionText>
            <WhiteSpace size="lg" />
            <SectionTitle ><SectionTitleNum>1.</SectionTitleNum>如何理解“社区的疫情抵抗力”？</SectionTitle>
            <WingBlank size="lg">
                <SectionText>《社区疫情抵抗力地图》与“疫情地图”不同，它并不反映实际疫情，而是重点对社区自身的抵抗疫情的能力进行研究考察。所谓“抵抗力”，是由社区自身属性决定的对疫情的抵御与抗击能力。地图的核心目的是帮助大众及包括居民与管理者在内的基层团体提高社区防疫意识、识别社区自身防疫优劣势，引导各方共同提升社区疫情抵抗力，保障复工复产安全有序进行。</SectionText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <SectionTitle ><SectionTitleNum>2.</SectionTitleNum>为什么要关注社区的疫情抵抗力？</SectionTitle>
            <WingBlank size="lg">
                <SectionText>1月24日，国家卫健委牵头成立包括32个部门的应对新型冠状病毒感染的肺炎疫情联防联控工作机制发布《关于加强新型冠状病毒感染的肺炎疫情社区防控工作的通知》。《通知》要求各地肺炎疫情联防联控工作机制“充分发挥社区动员能力...群防群控，稳防稳控，有效落实综合性防控措施，防止疫情输入、蔓延、输出，控制疾病传播”。</SectionText>
            </WingBlank>
            <WhiteSpace />
            <WingBlank size="lg">
                <SectionText>社区是城市抗击疫情的基层堡垒，也是这场战役中离普通市民最近、最关键的战线之一。然而，在人力短缺、事务繁多的情况下，社区防疫压力较大。现象的背后，也反映出提高居民对于社区防疫的意识，调动居民积极主动抗击疫情的重要性与紧迫性。</SectionText>
            </WingBlank>
            {/* <NewsText>1月24日，国家卫健委牵头成立包括32个部门的应对新型冠状病毒感染的肺炎疫情联防联控工作机制发布《关于加强新型冠状病毒感染的肺炎疫情社区防控工作的通知》。《通知》要求各地肺炎疫情联防联控工作机制“充分发挥社区动员能力...群防群控，稳防稳控，有效落实综合性防控措施，防止疫情输入、蔓延、输出，控制疾病传播”。</NewsText> */}
            <WhiteSpace />
            <WingBlank size="lg">
                <SectionText>我们希望地图能够增强各方对社区/小区防疫工作的认知，在助力社区防疫、复工复产的同时，以这场疫情为契机，促进居民参与的基层治理共同体的构建。</SectionText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <SectionTitle ><SectionTitleNum>3.</SectionTitleNum>地图中，抵抗力的评价体系建立的依据是什么？</SectionTitle>
            <WingBlank size="lg">
                <SectionText>疫情抵抗力相关因素，可分为“防范”与“抗击”两大类别：前者是与病毒传播有关的“被动”因素，后者包括处理病例、维持社区疫情期间生活运行等“主动”因素。在实际生活中，抵抗力因素对应着四类社区防疫场景。地图依据这些场景构建疫情抵抗力评价体系，以指导居民与治理团体对抵抗力的提升措施。</SectionText>
            </WingBlank>
            <WhiteSpace />
            <WingBlank size="lg">
                <GrayText>对社区抵抗力相关因素的量化评估，可以助力社区及居民团体：1.合理判断疫情风险2.理解居民自身抗疫优劣势 3.评估调配医疗资源4. 统筹完善社区服务。</GrayText>
            </WingBlank>
            <div style={{ width: '80%', margin: "0 auto" }}>
                <img src={img_0} alt="" style={{ width: '100%' }} />
            </div>
            <div style={{ width: '80%', margin: "0 auto", overflowX: "auto", overflowY: "hidden" }}>
                <div style={{ width: "200%" }}>
                    <img src={img_1} alt="" style={{ width: '50%' }} />
                    <img src={img_1_1} alt="" style={{ width: '50%' }} />
                </div>
            </div>
            <p style={{ textAlign: "center", color: "#909399" }}>左滑查看指标解释&lt;&lt;</p>
            <div style={{ width: '80%', margin: "0 auto", overflowX: "auto", overflowY: "hidden" }}>
                <div style={{ width: "200%" }}>
                    <img src={img_2} alt="" style={{ width: '50%' }} />
                    <img src={img_2_2} alt="" style={{ width: '50%' }} />
                </div>
            </div>
            <p style={{ textAlign: "center", color: "#909399" }}>左滑查看指标解释&lt;&lt;</p>
            <div style={{ width: '80%', margin: "0 auto", overflowX: "auto", overflowY: "hidden" }}>
                <div style={{ width: "200%" }}>
                    <img src={img_3} alt="" style={{ width: '50%' }} />
                    <img src={img_3_3} alt="" style={{ width: '50%' }} />
                </div>
            </div>
            <p style={{ textAlign: "center", color: "#909399" }}>左滑查看指标解释&lt;&lt;</p>
            <div style={{ width: '80%', margin: "0 auto", overflowX: "auto", overflowY: "hidden" }}>
                <div style={{ width: "200%" }}>
                    <img src={img_4} alt="" style={{ width: '50%' }} />
                    <img src={img_4_4} alt="" style={{ width: '50%' }} />
                </div>
            </div>
            <p style={{ textAlign: "center", color: "#909399" }}>左滑查看指标解释&lt;&lt;</p>
            <WhiteSpace size="lg" />
            <SectionTitle ><SectionTitleNum>4.</SectionTitleNum>新版地图有哪些改进？</SectionTitle>
            <WhiteSpace />
            <SectionText style={{ textAlign: "center" }} >指标调整 – 更加合理易懂</SectionText>
            <WingBlank size="lg">
                <NorText>•指标名称调整：“暴露情况”改为“风险规避“，“居民构成”改为“居民特征”</NorText>
                <NorText>•指标分类调整：人口密度纳入“居民特征”分类</NorText>
                <NorText>•考虑返工时期情况，在“风险规避”中，加入“通勤人口比例”指标</NorText>
            </WingBlank>
            <WhiteSpace />
            <SectionText style={{ textAlign: "center" }} >算法的验证与改进 – 分析结论更加精准</SectionText>
            <WingBlank size="lg">
                <NorText>•基于公众及专家反馈结果，对各指标权重进行修正</NorText>
                <NorText>•通过将当前疫情发生地与抵抗力指标进行关联性分析，我们发现并提取出了与疫情发生显著相关的抵抗力因素。通过近一步研究分析，模型拟合优度具有统计意义（P&lt;0.05）,模型预测在当前研究环境显示出较高准确率（&gt;90%），可以使用上述显著相关因素对小区的安全度进行预测。</NorText>
            </WingBlank>
            <WhiteSpace />
            <SectionText style={{ textAlign: "center" }} >加入“安全度预测”功能</SectionText>
            <WingBlank size="lg">
                <NorText>•基于以上分析结果，地图加入了“<span style={{ fontWeight: 700 }}>安全度预测</span>”功能。点击地图左侧“安全度预测”按钮，地图对各小区安全度预测结果进行可视化表达。</NorText>
                <NorText>•<span style={{ fontWeight: 700 }}>安全度预测与抵抗力得分均较高的小区</span>，总体抗疫形式较好，对于其居民复工也更加有利</NorText>
                <NorText>•<span style={{ fontWeight: 700 }}>安全度预测或抵抗力较低的小区</span>，则需要重点加强防范，通过地图提供的抵抗力指数，小区用户及相关治理方可以识别自身防疫“短板”，地图也针对小区抵抗力劣势方面，在“重点防范”中提出增强抵抗力、助力复工复产的对策建议。</NorText>
            </WingBlank>
            <WhiteSpace />
            <SectionText style={{ textAlign: "center" }} >更友好的界面与相关信息提供</SectionText>
            <WingBlank size="lg">
                <NorText>•加入定位功能按钮，一键定位到用户所在小区(安卓用户推荐使用手机浏览器)</NorText>
                <NorText>•地图使用中文底图</NorText>
                <NorText>•查看“医疗资源”选项时，显示北京最新公布发热门诊医院名称及地点</NorText>
                <NorText>•抵抗力分项因素得分排名显示“超过XX%”的小区</NorText>
                <NorText>•其他界面细节调整</NorText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <SectionTitle ><SectionTitleNum>5.</SectionTitleNum>如何一起让地图变得更好？</SectionTitle>
            <WingBlank size="lg">
                <NorText>为了更好地收集批评与建议，地图于2月18日开启了公共调查参与通道（在地图中点击“我要参与”按钮，或者直接扫描下面二维码参与），我们基于得到的初步意见，定制了问卷, 就大家关心的问题进行进一步反馈收集工作, 大家也可以通过问卷提出自己对于地图以及社区防疫工作的任何意见与建议。</NorText>
            </WingBlank>
            <WhiteSpace />
            <div style={{ width: '80%', margin: "0 auto" }}>
                <img src={img_ewm} alt="" style={{ width: '100%' }} />
            </div>
            <WhiteSpace />
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <NorText>作为一次将专业城市研究与公众参与服务结合的实验性尝试，地图的优化工作采用专业研究与公众调查结合的路径。在开放公众调查的同时，我们也平行地从专业角度进行研究。</NorText>
                <WhiteSpace />
                <NorText>大家的反馈将与研究成果一起，成为未来《社区疫情抵抗力地图》优化工作的重要参考，让《地图》为社区防疫以及基层治理共同体的构建带来更多价值。</NorText>
                <WhiteSpace />
                <NorText>衷心感谢每一位支持《地图》的朋友，我们一如既往地期待您给予宝贵的批评与建议。</NorText>
                <WhiteSpace />
                <NorText>望疫情早日结束，我们的城市更加安全美好。</NorText>
            </WingBlank>
            {/* <WhiteSpace size="sm" />
            <Title>北京社区疫情抵抗力地图</Title>
            <WhiteSpace size="xl" />
            <SectionTitle>关于地图</SectionTitle>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>新冠肺炎正处于爆发期，在这场没有硝烟的战争中，社区是城市抵抗疫情和措施落地的基本空间单元，也是离你我生活最近的第一道防线。</SectionText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>我们将社区的疫情抵抗力定义为由其自身属性决定的对疫情的抵御与抗击能力。在科学理论指引下，应用大数据技术可以在短时间内将城市内众多社区及其包含小区的疫情抵抗力进行较为细致的量化评估。我们结合以往防灾研究文献及此次疫情特征，构建了社区疫情抵抗力评价方法，在北京市政府现阶段规定的2月10日假期结束前，对北京市6727个小区的疫情抵抗力进行量化评估，形成这张“社区疫情抵抗力地图”。</SectionText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>疫情抵抗力地图与真实疫情地图不同。社区疫情抵抗力由其自身属性决定，而实际发生的疫情是外部疫情冲击强度与社区疫情抵抗力共同作用的结果。因此，社区疫情抵抗力地图首先对社区自身的防御抵抗能力进行考察，以引导城市和社区在疫情发生前认知自身状况并采取防疫措施。结合实际疫情情况，可以对社区疫情抵抗力的评估体系进行校验与优化。</SectionText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>您可以通过点击或搜索查看北京市小区的疫情抵抗力状况，查看自己所在小区疫情抵抗力优势与劣势。对疫情抵抗力单项指标排名后50%的小区，地图会提示采取相应的防护措施。我们希望这张地图能够助力北京和其他城市社区居民自治及城市管理者的认知决策，构建更坚固的社区堡垒，为打赢这场疫情阻击战贡献自己的力量。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <SectionTitle>社区疫情抵抗力评估指标</SectionTitle>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>结合文献研究以及此次疫情的特点，我们将社区疫情抵抗力分为风险规避、医疗资源、服务治理和居民特征四方面因素，并基于可用的数据建立量化评估方法：</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <div style={{ width: '80%', margin: "0 auto" }}>
                <img src={zhibiaotushi} alt=""="指标图示" style={{ width: '100%' }} />
            </div>
            <div style={{ color: "#ccc", fontWeight: "bold", fontSize: "14px", margin: "4px 0 6px", textAlign: "center" }}>社区疫情抵抗力评估维度图示</div>

            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={chuachuanbofengxiannbo} name="风险规避" detail="疫情传入小区及内部传播可能性" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括:</SectionText>
                <SectionText>1.小区与人群密集场所的距离-</SectionText>
                <SectionText>人群流动是疫情传播的主要途径，地图选取了机场、火车站(特级、一级)、和商场三类人群居密集公共场所，小区与这些场所距离越近，被疫情传播的风险越高；(POI数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>2.小区及周边人口密度-</SectionText>
                <SectionText>高密度的居住环境会加剧疫情的人际传播；(手机信令数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>3.小区不稳定人口比例–</SectionText>
                <SectionText>小区范围人口的流动性越大，疫情传入的概率越高；(手机信令数据分析)</SectionText>

            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={yiliaoziyuan} name="医疗资源" detail="小区及附近可用医疗资源" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括:</SectionText>
                <SectionText>4.医疗资源可达性-</SectionText>
                <SectionText>医疗及隔离设施是社区抵御疫情的核心资源。小区居民对医疗机构的邻近程度，以及邻近医疗机构的规格水平，影响小区对疫情的抵抗力；(POI数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>5.隔离设施可达性–</SectionText>
                <SectionText>隔离是战胜传染性疫情的重要方式，新冠肺炎爆发以来，酒店为密切接触人员提供有效的隔离场所。 地图选取酒店作为隔离设施考察其对设施居民的可达性，可达性越高，越有利于社区对抗疫情。(POI数据分析)</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={fuwuzhili} name="服务治理" detail="小区服务机构及社区治理水平" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括:</SectionText>
                <SectionText>6.社区服务可达性–</SectionText>
                <SectionText>社区服务设施在疫情期间的人员管理，知识宣传，卫生维护等服务水平对控制疫情蔓延至关重要，地图考察北京社区服务中心对各小区的可达性，可达性较好的社区对疫情抵抗力较强；(POI数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>7.区内基础服务设施水平-</SectionText>
                <SectionText>良好的基础设施供给是社区居民度过疫期的保障，地图选取超市，社区服务中心及体育设施三类与居民生活紧密相关的设施进行供给分析，供给较好的社区对疫情抵抗力较强；(POI数据分析)</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={jumingoucheng} name="居民特征" detail="小区居民群体结构" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括:</SectionText>
                <SectionText>8.就业居民比例–</SectionText>
                <SectionText>就业居民有较稳定收入来源，使其家庭能够抵抗更大的由疫情导致的经济风险；居民就业比例高有助于社区抵御疫情；(手机信令数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>9.特殊人群比例-</SectionText>
                <SectionText>儿童和老人等人群，疫情时需要特殊照顾，此类人群较多的小区，对疫情抵抗力也相对较弱； (手机信令数据分析)</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <SectionTitle>说明</SectionTitle>
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>北京市现有7000多个社区，包含1万多个小区。限于我们现阶段能获取的信息数据，此版社区疫情抵抗力地图暂时无法覆盖到北京市所有小区。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>地图的数据来源包括：北京城市POI数据(2018, 2019)、北京手机信令数据 (2018,2019)、互联网评价数据(2018)、北京市卫生健康委员会公布数据(2018)以及北京市疾病预防控制中心公布疫情信息(2020/02 动态更新)。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>我们的分析方法和结果还远非完善，将结合新的数据与技术逐步改进，期待您的反馈。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>愿这场战役早日结束，我们的城市更加安全美好。</SectionText>
            </WingBlank> */}
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <SectionSubTitle>项目团队</SectionSubTitle>
            <p style={{ textAlign: "center", color: "rgb(54, 54, 54) " }}>清河创新小分队</p>
            <WhiteSpace size="xl" />
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54) " }}><span style={{ fontWeight: "bold" }}>项目指导</span>:林文棋</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54) " }}><span style={{ fontWeight: "bold" }}>统筹策划</span>:李洋</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}><span style={{ fontWeight: "bold" }}>指标研究</span>:李洋 褚峤 张苗琳</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54) " }}><span style={{ fontWeight: "bold" }}>数据准备</span>:张弘 贾道祥</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54) " }}><span style={{ fontWeight: "bold" }}>数据分析</span>:褚峤 张弘 张苗琳</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}><span style={{ fontWeight: "bold" }}>UI设计</span>:刘佳艺</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}><span style={{ fontWeight: "bold" }}>前端开发</span>:贾道祥 赵鑫</p>
            <WhiteSpace size="xl" />
            <SectionSubTitle>支持感谢</SectionSubTitle>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>梁军辉 蔡玉蘅</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>孙小明 吴纳维 李颖 刘海金 高铭 史未名 李靖 郑茜</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>张彦军 于佳 刘斌 孔宪娟 李昊杰 何慧灵 谢盼 何雅楠</p>
            <WhiteSpace size="xl" />
            <SectionSubTitle>联系我们</SectionSubTitle>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>Email:287470717@qq.com</p>
            <WhiteSpace size="xl" />
            <SectionSubTitle>声明</SectionSubTitle>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>本地图成果及结论仅限研究学习交流之用<br />欢迎业界学界同仁提出批评与建议</p>
            {/* <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>联系人:易女士</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>电话:010-82818411</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>18350068279(疫情期间)</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>Email:ict@thupdi.com</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>地址：北京市海淀区清河嘉园甲1号楼西塔22层</p>
            <p style={{ textAlign: "center", lineHeight: "22px", color: "rgb(54, 54, 54)" }}>邮政编码:100085</p> */}
            {/* <ReturnHome ><a href="#" style={{ color: "rgb(0,174,102)" }} onClick={() => { props.history.push("/") }}>回到<br />首页</a></ReturnHome> */}
            <ReturnHome ><Link to="/" style={{ color: "rgb(0,174,102)" }}>回到<br />地图</Link></ReturnHome>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
        </Fragment >
    )
}
export default About