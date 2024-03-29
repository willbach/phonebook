import Col from '../components/spacing/Col'
import Text from '../components/text/Text'
import Navbar from '../components/nav/Navbar'
import ReactTypingEffect from 'react-typing-effect'

import './Home.scss'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import Button from '../components/form/Button'
import { FaBars, FaDiscord, FaGithub, FaGripHorizontal, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa'
import HomeMenu from '../components/phonebook/HomeMenu'
import { isMobileCheck } from '../utils/dimensions'
import { useState } from 'react'
import classNames from 'classnames'
import Entry from '../components/spacing/Entry'
import Divider from '../components/spacing/Divider'
import CopyIcon from '../components/text/CopyIcon'
import Link from '../components/nav/Link'
import Marquee from 'react-fast-marquee'


type Page = 'general' | 'apps' | 'blog' | 'other'

const Home  = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>('general')

  const onToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const isMobile = isMobileCheck()

  const funnyTypedTexts = ['DAOS', 'SECRETS', 'SOCIETIES', 'CULTS', 'CHADS']
  const srsTypedTexts = ['WEB3 APPS', 'CITIES']
  const texts = funnyTypedTexts.flatMap((f, i) => (i % 2 == 0) ? [srsTypedTexts[0],f] : (i % 3 == 0) ? [srsTypedTexts[1], f] : f)

  return (<Col className='home-container'>
    <Marquee gradient={false}>
      <Text> &nbsp;* WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY * WEB3 CODING MADE EASY 
      </Text>
    </Marquee>
    <Col className={classNames('home', { isMobile })}>
      <Navbar menuOpen={menuOpen} onToggle={onToggle} />
      <Container>
        <Row className={classNames('main', { isMobile })} between>
          <Col>
            <Col className={classNames('title', { isMobile })}>
              <Text className='untyped'>
                A CODING <br/>
                ENVIRONMENT <br/> FOR&nbsp;
                <ReactTypingEffect 
                  className='typed'
                  cursorClassName='cursor'
                  text={texts}
                  speed={100}
                  eraseDelay={5000}
                  typingDelay={0}
                />
              </Text>
            </Col>
            <Text className={classNames('sidecard', { isMobile })}>
              Uqbar is a {!isMobile && <br/> }
              one-stop coding environment {!isMobile && <br/>}
              that makes writing and {!isMobile && <br/>}
              deploying smart contracts {!isMobile && <br/>}
              simple, efficient, and secure. 
            </Text>
          </Col>
          {menuOpen && <Col className={classNames('home-menu mr1', { isMobile, menuOpen })}>
            <div className='overlay' onClick={onToggle}></div>
            <Row between className='book'>

              <Col className='page'>
                {page == 'general' && <Entry className='mt1' title='GENERAL'>
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/'>WHAT IS UQBAR</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar-clearpaper/'>CLEARPAPER</a>
                  <Divider />
                  <a target='_blank' href='https://uqbarnetwork.medium.com/zk-execution-and-uqbar-a8f49784155e'>ZK-ROLLUPS</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/dev-docs/'>DEV DOCS</a>
                </Entry>}
                {page === 'apps' && <Entry className='mt1' title='APPS'>
                  <a target='_blank' href='/pokur'>POKUR</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/uqbar-development-suite'>SUITE</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/pongo'>PONGO</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/escape'>ESCAPE</a>
                  <Divider />
                  <a target='_blank' href='https://uqbar-network.gitbook.io/uqbar/applications/handshake'>HANDSHAKE</a>
                </Entry>}
                {page == 'blog' && <Entry className='mt1' title='CONTENT'>
                  <a target='_blank' href='https://litpub.uqbar.ink/index'>BLOG</a>
                  <Divider />
                  <a target='_blank' href='https://uqbarnetwork.medium.com/the-uqbar-library-12e5beba6c81'>LIBRARY</a>
                  <Divider />
                  <a target='_blank' href='https://www.youtube.com/channel/UC1Mb7Y7Yytdw9LOmUFdEKbA'>TEAM <br/> INTERVIEWS</a>
                  <Divider />
                  <Link href='/age'>NETWORK AGE <br/> PODCAST</Link>
                </Entry>}
                {page == 'other' && <Entry className='mt1' title='OTHER'>
                  <a target='_blank' href='https://github.com/uqbar-dao'>GITHUB</a>
                  <Divider />
                  <a target='_blank' href='https://urbit.org/organizations/uqbar'>APPLICATIONS</a>
                  <Divider />
                  <Row>
                    <a>URBIT </a>
                      <CopyIcon text='~hocwyn-tipwex/uqbar-event-horizon-forever' />
                  </Row>
                </Entry>}
              </Col>

              <Col className='tabs'>
                <Row onClick={()=> setPage('general')} className={`tab ${classNames({ isMobile, active: page == 'general' })}`}>GENERAL</Row>
                <Row onClick={()=> setPage('apps')} className={`tab ${classNames({ isMobile, active: page == 'apps' })}`}>APPS</Row>
                <Row onClick={()=> setPage('blog')} className={`tab ${classNames({ isMobile, active: page == 'blog' })}`}>CONTENT</Row>
                <Row onClick={()=> setPage('other')} className={`tab ${classNames({ isMobile, active: page == 'other' })}`}>OTHER</Row>
              </Col>
            </Row>
            <Row between className='socials'> 
              <a target='_blank' href='https://discord.gg/G5VVqtjbVG'><FaDiscord /></a>
              <a target='_blank' href='https://github.com/uqbar-dao'><FaGithub /></a>
              <a target='_blank' href='https://twitter.com/uqbarnetwork'><FaTwitter /></a>
              <a target='_blank' href='https://uqbarnetwork.medium.com/'><FaMedium /></a>
              <a target='_blank' href='https://t.me/uqbarnetwork'><FaTelegram /></a>
            </Row>
          </Col>}
        </Row>
      </Container>
    </Col>
  </Col>)
}

export default Home