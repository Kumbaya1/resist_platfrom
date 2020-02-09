import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { Title, SectionTitle, SectionText, ReturnHome, SectionSubTitle } from "./styled"
import Plate from "../../components/Plate"
import zhibiaotushi from "../../assets/images/zhibiaotushi.png"
import chuachuanbofengxiannbo from "../../assets/images/about/1.png"
import yiliaoziyuan from "../../assets/images/about/2.png"
import fuwuzhili from "../../assets/images/about/3.png"
import jumingoucheng from "../../assets/images/about/4.png"
function About(props) {
    return (
        <Fragment>
            <WhiteSpace />
            <Title>北京市社区疫情抵抗力地图</Title>
            <WhiteSpace size="xl" />
            <SectionTitle>关于地图</SectionTitle>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>新冠肺炎正处于爆发期，在这场没有硝烟的战争中，社区是城市抵抗疫情和措施落地的基本空间单元， 也是离你我生活最近的第一道防线。</SectionText>
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
                <SectionText>结合文献研究以及此次疫情的特点，我们将社区疫情抵抗力分为暴露情况、医疗资源、服务治理和居民构成四方面因素，并基于可用的数据建立量化评估方法：</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <div style={{ width: '80%', margin: "0 auto" }}>
                <img src={zhibiaotushi} alt="指标图示" style={{ width: '100%' }} />
            </div>
            <div style={{ color: "#000", fontWeight: "bold", fontSize: "16px", margin: "4px 0 6px", textAlign: "center" }}>社区疫情抵抗力评估维度图示</div>
            <div style={{ color: "#000", fontSize: "14px", textAlign: "center" }}>作者：《北京社区疫情抵抗力地图》项目组</div>

            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={chuachuanbofengxiannbo} name="暴露情况" detail="-疫情传入小区及内部传播可能性" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括</SectionText>
                <SectionText>1.小区与人群密集场所的距离 - 人群流动是疫情传播的主要途径，地图选取了机场、火车站(特级、一级)、和商场三类人群居密集公共场所，小区与这些场所距离越近，被疫情传播的风险越高；(方法-POI数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>2.小区及周边人口密度  - 高密度的居住环境会加剧疫情的人际传播；(方法-手机信令数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>3.小区不稳定人口比例 – 小区范围人口的流动性越大，疫情传入的概率越高；(方法-手机信令数据分析)</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={yiliaoziyuan} name="医疗资源" detail="-小区及附近可用医疗资源" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括</SectionText>
                <SectionText>4.医疗资源可达性 - 医疗及隔离设施是社区抵御疫情的核心资源。小区居民对医疗机构的邻近程度，以及邻近医疗机构的规格水平，影响小区对疫情的抵抗力；(方法-POI数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>5.隔离设施可达性 – 隔离是战胜传染性疫情的重要方式，新冠肺炎爆发以来，酒店为密切接触人员提供有效的隔离场所。 地图选取酒店作为隔离设施考察其对设施居民的可达性，可达性越高，越有利于社区对抗疫情。(方法-POI数据分析)</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={fuwuzhili} name="服务治理" detail="–小区服务机构及社区治理水平" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括</SectionText>
                <SectionText>6.社区服务可达性 – 社区服务设施在疫情期间的人员管理，知识宣传，卫生维护等服务水平对控制疫情蔓延至关重要，地图考察北京市社区服务中心对各小区的可达性，可达性较好的社区对疫情抵抗力较强；(方法-POI数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>7.区内基础服务设施水平 -  良好的基础设施供给是社区居民度过疫期的保障，地图选取超市，社区服务中心及体育设施三类与居民生活紧密相关的设施进行供给分析，供给较好的社区对疫情抵抗力较强；(方法-POI数据分析)</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={jumingoucheng} name="居民构成" detail="–小区居民群体结构" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>8.次级指标包括</SectionText>
                <SectionText>就业居民比例 – 就业居民有较稳定收入来源，使其家庭能够抵抗更大的由疫情导致的经济风险；居民就业比例高有助于社区抵御疫情；(方法-手机信令数据分析)</SectionText>
                <WhiteSpace />
                <SectionText>9.特殊人群比例  - 儿童和老人等人群，疫情时需要特殊照顾，此类人群较多的小区，对疫情抵抗力也相对较弱； (方法-手机信令数据分析)</SectionText>
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
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <SectionSubTitle>项目团队</SectionSubTitle>
            <p style={{ textAlign: "center" }}>北京清华同衡规划设计研究院</p>
            <p style={{ textAlign: "center" }}>技术创新中心</p>
            <WhiteSpace size="xl" />
            <p style={{ textAlign: "center", lineHeight: "22px" }}><span style={{ fontWeight: "bold" }}>统筹策划</span>:李洋</p>
            <p style={{ textAlign: "center", lineHeight: "22px" }}><span style={{ fontWeight: "bold" }}>指标研究</span>:李洋 褚鞒 张苗琳</p>
            <p style={{ textAlign: "center", lineHeight: "22px" }}><span style={{ fontWeight: "bold" }}>数据准备</span>:张弘 贾道祥</p>
            <p style={{ textAlign: "center", lineHeight: "22px" }}><span style={{ fontWeight: "bold" }}>数据分析</span>:褚诮 张弘 张苗琳</p>
            <p style={{ textAlign: "center", lineHeight: "22px" }}><span style={{ fontWeight: "bold" }}>UI设计</span>:刘佳艺</p>
            <p style={{ textAlign: "center", lineHeight: "22px" }}><span style={{ fontWeight: "bold" }}>前端开发</span>:贾道祥 赵鑫</p>
            <WhiteSpace size="xl" />
            <SectionSubTitle>支持感谢</SectionSubTitle>
            <p style={{ textAlign: "center", lineHeight: "22px" }}>梁军辉 蔡玉蘅</p>
            <p style={{ textAlign: "center", lineHeight: "22px" }}>孙小明 吴纳维 李颖 刘海金 高铭 史未名 李靖</p>
            {/* <ReturnHome ><a href="#" style={{ color: "rgb(0,174,102)" }} onClick={() => { props.history.push("/") }}>回到<br />首页</a></ReturnHome> */}
            <ReturnHome ><Link to="/" style={{ color: "rgb(0,174,102)" }}>回到<br />首页</Link></ReturnHome>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
        </Fragment >
    )
}
export default About