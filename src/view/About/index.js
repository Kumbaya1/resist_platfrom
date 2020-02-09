import React, { Fragment } from "react"
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { Title, SectionTitle, SectionText, SectionSubTitle, Wish } from "./styled"
import Plate from "../../components/Plate"
import zhibiaotushi from "../../assets/images/zhibiaotushi.png"
import chuachuanbofengxiannbo from "../../assets/images/chuanbofengxian.png"
import yiliaoziyuan from "../../assets/images/yiliaoziyuan.png"
import fuwuzhili from "../../assets/images/fuwuzhili.png"
import jumingoucheng from "../../assets/images/jumingoucheng.png"
function About() {
    return (
        <Fragment>
            <WhiteSpace />
            <Title>北京市社区疫情抵抗力地图</Title>
            <WhiteSpace size="xl" />
            <SectionTitle>关于地图</SectionTitle>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>新型冠状病毒肺炎正处于爆发期，在这场没有硝烟的战争中，社区是城市抵抗疫情和措施落地的基本空间单元， 也是离你我生活最近的第一道防线。</SectionText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>社区的疫情抵抗力是由其自身属性决定的对疫情的抵御与抗击能力。在科学理论指引下，应用大数据技术可以在短时间内将众多社区的疫情抵抗力进行较细致的量化评估。我们结合以往防灾研究文献及此次疫情特征，构建了社区疫情抵抗力评价方法，在北京政府现阶段规定的2月9日假日结束前，对北京市XXXX个社区的疫情抵抗力进行量化评估，就是这张“社区疫情抵抗力地图”。</SectionText>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>您可以通过点击或搜索查看北京市小区的疫情抵抗力状况，看看自己小区疫情抵抗力的优势与劣势，并采取相应的措施。我们希望地图能够助力北京及其他城市社区居民自治及城市管理者的认知决策，构建更有力的社区堡垒，为战争的胜利及更好的城市贡献自己的力量。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <SectionTitle>社区疫情抵抗力评估方法</SectionTitle>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <SectionText>结合文献研究以及此次疫情的特点，我们将社区疫情抵抗力分为传播风险、医疗资源、服务治理和居民构成四方面因素，并基于可用的数据建立量化评估方法：</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <div style={{ width: '80%', margin: "0 auto" }}>
                <img src={zhibiaotushi} alt="指标图示" style={{ width: '100%' }} />
            </div>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={chuachuanbofengxiannbo} name="传播风险" detail="-疫情传入小区及内部传播可能性" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括</SectionText>
                <SectionText>1.小区与人群密集场所的距离 -人群流动是疫情传播的主要途径，地图选取了机场，火车站，商场三类人居密集公共场所，小区与这些场所距离越近，被疫情传播的风险越高；（POI数据分析）</SectionText>
                <WhiteSpace />
                <SectionText>2.小区人口密度  - 高密度的居住环境会加剧疫情的人际传播；（手机信令数据分析）</SectionText>
                <WhiteSpace />
                <SectionText>3.小区流动人群比例 – 小区人口的流动性越大，将疫情传入小区的概率越高；（手机信令数据分析）</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={yiliaoziyuan} name="医疗资源" detail="-小区及附近可用医疗资源" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括</SectionText>
                <SectionText>4.医疗资源可达性 - 医疗及隔离设施是小区抵御疫情的核心资源。小区居民对医疗机构的邻近程度，以及邻近医疗机构的规格水平，影响小区对疫情的抵抗力；（POI分析）</SectionText>
                <WhiteSpace />
                <SectionText>5.隔离设施可达性 – 隔离是战胜传染性疫情的重要方式，新冠肺炎爆发以来，酒店为密切接触人员提供有效的隔离场所。 地图选取酒店作为隔离设施考察其对设施居民的可达性，可达性越高，越有利于社区对抗疫情。（POI分析）</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={fuwuzhili} name="服务治理" detail="–小区服务机构及社区治理水平" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>次级指标包括</SectionText>
                <SectionText>6.社区服务水平 – 社区与物业在疫情期间的人员管理，知识宣传，卫生维护等服务水平对控制疫情蔓延至关重要，治理水平高的社区对疫情抵抗力相应较强；（大众点评数据分析）</SectionText>
                <WhiteSpace />
                <SectionText>7.小区内基础服务设施水平 -  良好的基础设施供给是社区居民度过疫期的保障，地图选取超市，社区服务中心及体育设施三类与居民生活紧密相关的设施进行供给分析，供给较好的社区对疫情抵抗力较强；（POI数据分析）</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Plate img={jumingoucheng} name="居民构成" detail="–小区居民群体结构" />
            <WhiteSpace size="xl" />
            <WingBlank size="lg">
                <SectionText>8.次级指标包括</SectionText>
                <SectionText>就业居民比例 – 就业居民有较稳定收入来源，使其家庭能够抵抗更大的由疫情导致的经济风险；就业比例高有助于社区抵御疫情；（手机信令数据分析）</SectionText>
                <WhiteSpace />
                <SectionText>9.特殊人群比例  - 儿童和老人等人群，疫情时需要特殊照顾，此类人群较多的社区，对疫情抵抗力也相对较弱； （手机信令数据分析）</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <SectionTitle>说明</SectionTitle>
            <WhiteSpace size="xl" />
            <SectionSubTitle>疫情抵抗力</SectionSubTitle>
            <WingBlank size="lg">
                <SectionText>疫情抵抗力地图与真实疫情地图不同。社区疫情抵抗力由社区自身属性决定，而实际发生的疫情是外部疫情冲击强度与社区疫情抵抗力共同作用的结果。因此，社区疫情抵抗力地图首先对社区自身的防御抵抗能力进行考察，以引导城市和社区在疫情发生前认知自身状况并采取防疫措施。结合实际疫情情况，可以对社区疫情抵抗力的评估体系进行校验与优化。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <SectionSubTitle>评估对象小区</SectionSubTitle>
            <WingBlank size="lg">
                <SectionText>限于我们现阶段能获取的信息，我们对XXXX个相关信息充分的小区疫情抵抗力进行了评估，暂时无法覆盖到北京市所有小区。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <SectionSubTitle>数据</SectionSubTitle>
            <WingBlank size="lg">
                <SectionText>2018-19城市POI数据，2018-19北京手机信令数据，大众点评网站数据，北京市卫健委公布数据，北京市卫生健康委员会，社区卫生服务中心数据来源poi, 北京市卫生和计划生育委员会提供2018-11-12</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <SectionSubTitle>局限性</SectionSubTitle>
            <WingBlank size="lg">
                <SectionText>我们的分析方法和结果还远非完善，将结合新的数据和您的反馈逐步改进。</SectionText>
            </WingBlank>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Wish>
                我们为奋战在一线的白衣天使们祈福，每人亦需坚守自己的堡垒，做出贡献愿天使凯旋，众生平安，城市更加美好
            </Wish>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <SectionSubTitle>项目团队</SectionSubTitle>




        </Fragment>
    )
}
export default About