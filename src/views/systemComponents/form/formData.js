import * as ElValid from '@/utils/jr-validate'

const GiantList = {
  '超限高层建筑工程抗震设防专项审查申报表': [
    {
      label: '工程名称',
      key: 'gcmc',
      value: '',
      placeholder: '请通过报审编号查询获取工程名称',
      type: 'text',
      readonly: true
    },
    {label: '报审编号', key: 'bsbh', value: '', type: 'search'},
    {label: '建设单位', key: 'jsdw', value: '', type: 'text'},
    {value: '建筑面积', type: 'span', class: 'box-style', width: '12.25%', lineHeight: '35px'},
    {
      label: '地上/万㎡', key: 'dsjzmj', value: '', type: 'text', width: '18.9%', labelWidth: '80px',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateArchitectureFloat, trigger: 'blur'}
      ]
    },
    {
      label: '地下/万㎡', key: 'dxjzmj', value: '', type: 'text', width: '18.927%', labelWidth: '80px',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateArchitectureFloat, trigger: 'blur'}
      ]
    },
    {label: '建设地点', key: 'jsdd', value: '', type: 'text'},
    {label: '申报日期', key: 'sbrq', value: '', type: 'date'},
    {
      label: '报审单位负责人', key: 'bsdwfzr', value: '', type: 'text',
      rules: [
        {required: true, message: '报审单位负责人不能为空', trigger: 'blur'},
        {validator: ElValid.validateName, trigger: 'blur'}
      ]
    },
    {
      label: '联系电话', key: 'dwfzrLxdh', value: '', type: 'text',
      rules: [
        {required: true, message: '联系电话不能为空', trigger: 'blur'},
        {validator: ElValid.validateMobile, trigger: 'blur'}
      ]
    },
    {
      label: '报审单位联系人', key: 'bsdwlxr', value: '', type: 'text',
      rules: [
        {required: true, message: '报审单位联系人不能为空', trigger: 'blur'},
        {validator: ElValid.validateName, trigger: 'blur'}
      ]
    },
    {
      label: '联系电话', key: 'dwlxrLxdh', value: '', type: 'text',
      rules: [
        {required: true, message: '联系电话不能为空', trigger: 'blur'},
        {validator: ElValid.validateMobile, trigger: 'blur'}
      ]
    },
    {
      label: '报审单位联系地址', key: 'bsdwlxdz', value: '', type: 'text',
      rules: {required: true, message: '报审单位联系地址不能为空', trigger: 'blur'}
    },
    {
      label: '邮  编', key: 'yzbm', value: '', type: 'text',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateZipCode, trigger: 'blur'}
      ]
    },
    {
      label: '设计单位', key: 'sjdw', value: '', type: 'text', col: 6,
      rules: {required: true, message: '设计单位不能为空', trigger: 'blur'}
    },
    {value: '资质等级', type: 'span', class: 'box-style', width: '12.58%', lineHeight: '35px'},
    {value: '', type: 'input', class: 'box-style', width: '12.58%', lineHeight: '35px'},
    {
      label: '联系人', key: 'sjdwLxr', value: '', type: 'text', col: 6,
      rules: [
        {required: true, message: '联系人不能为空', trigger: 'blur'}
        // {validator: ElValid.validateName, trigger: 'blur'},
      ]
    },
    {
      label: '联系电话', key: 'sjdwLxdh', value: '', type: 'text', width: '24.994%',
      rules: [
        {required: true, message: '联系电话不能为空', trigger: 'blur'},
        {validator: ElValid.validateMobile, trigger: 'blur'}
      ]
    },
    {
      label: '勘察单位', key: 'kcdw', value: '', type: 'text', col: 6,
      rules: {required: true, message: '勘察单位不能为空', trigger: 'blur'}
    },
    {value: '资质等级', type: 'span', class: 'box-style', width: '12.58%', lineHeight: '35px'},
    {value: '', type: 'input', class: 'box-style', width: '12.58%', lineHeight: '35px'},
    {
      label: '联系人', key: 'kcdwLxr', value: '', type: 'text', col: 6,
      rules: [
        {required: true, message: '联系人不能为空', trigger: 'blur'}
        // {validator: ElValid.validateName, trigger: 'blur'},
      ]
    },
    {
      label: '联系电话', key: 'kcdwLxdh', value: '', type: 'text', width: '24.994%',
      rules: [
        {required: true, message: '联系电话不能为空', trigger: 'blur'},
        {validator: ElValid.validateMobile, trigger: 'blur'}
      ]
    }
  ],
  '行政性审查报审情况': [
    {
      label: '1、项目立项批复', key: 'xmlxpf', value: '', type: 'text', col: 9,
      rules: {required: true, message: '项目立项批复不能为空', trigger: 'blur'}
    },
    {
      label: '2、规划设计要求意见书', key: 'ghsjYjs', value: '', type: 'text', col: 15,
      rules: {required: true, message: '规划设计要求意见书不能为空', trigger: 'blur'}
    },
    {
      label: '3、勘察单位资质证书副本', key: 'kcdwZzzsfb', value: '', type: 'text', col: 9,
      rules: {required: true, message: '勘察单位资质证书副本不能为空', trigger: 'blur'}
    },
    {label: '4、设计单位资质证书副本', key: 'sjdwZzzsfb', value: '', type: 'text', col: 15},
    {label: '5、建设用地土地使用证及设计要求说明书', key: 'jsydtdsyzYqsms', value: '', type: 'text', col: 24, labelWidth: '486px'},
    {
      label: '6、如为省外勘察设计单位，是否按规定办理了进省注册登记手续',
      key: 'isZcdj',
      value: '',
      type: 'text',
      col: 24,
      labelWidth: '486px'
    },
    {
      label: '7、勘察设计文件是否使用本单位专用图签并加盖出图专用章',
      key: 'isSyctzyz',
      value: '',
      type: 'text',
      col: 24,
      labelWidth: '486px'
    },
    {
      label: '8、工程设计的相应岗位是否按有关规定由有资质的注册执业人员担当，并在设计文件上加盖其执业专用章',
      key: 'isFhxygwgd',
      value: '',
      type: 'text',
      col: 24,
      labelWidth: '486px'
    }
  ],
  '抗震设防标准': [
    {label: '抗震设防烈度', key: 'kzsfld', value: '', type: 'text', col: 9},
    {label: '抗争设防类别', key: 'kzsflb', value: '', type: 'text', col: 8},
    {label: '设置地震动参数', key: 'sjdzdcs', value: '', type: 'text', col: 7}
  ],
  '勘察报告基本数据': [
    {label: '场地类别', key: 'cdlb', value: '', type: 'text', col: 24},
    {label: '等效剪切波速', key: 'dxjqbs', value: '', type: 'text', col: 24},
    {label: '覆盖层厚度', key: 'fgchd', value: '', type: 'text', col: 24},
    {label: '液化判别', key: 'yhpb', value: '', type: 'text', col: 24},
    {label: '持力层名称及埋深', key: 'clcmcjsm', value: '', type: 'text', col: 24},
    {label: '地基承载力特征值', key: 'djczltzz', value: '', type: 'text', col: 24},
    {label: '基础方案', key: 'jcfa', value: '', type: 'text', col: 24},
    {label: '不利地段评价', key: 'blddpj', value: '', type: 'text', col: 24}
  ],
  '基础设计概况': [
    {label: '基础类型', key: 'jclx', value: '', type: 'text', col: 24},
    {label: '基础埋深', key: 'jcms', value: '', type: 'text', col: 24},
    {label: '地下室底板厚度', key: 'dxsdbhd', value: '', type: 'text', col: 24},
    {label: '地下室顶板厚度', key: 'dxstophd', value: '', type: 'text', col: 24},
    {label: '桩    型', key: 'zx', value: '', type: 'text', col: 24},
    {label: '单桩承载力特征值', key: 'dzczltzz', value: '', type: 'text', col: 24},
    {label: '承台的主要截面', key: 'ctdzyzm', value: '', type: 'text', col: 24}
  ],
  '建筑结构布置和选型': [
    {
      label: '主楼高度（层数）', key: 'zlgd', value: '', type: 'text', col: 24,
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validatePositive, trigger: 'blur'}
      ]
    },
    {
      label: '出屋面高度（层数）', key: 'czmgd', value: '', type: 'text', col: 24,
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validatePositive, trigger: 'blur'}
      ]
    },
    {
      label: '裙楼高度（层数）', key: 'qlgd', value: '', type: 'text', col: 24,
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validatePositive, trigger: 'blur'}
      ]
    },
    {value: '结构高宽比', type: 'span', class: 'box-style', width: '12.25%', lineHeight: '35px'},
    {
      label: '主楼', key: 'zljggkb', value: '', type: 'text', labelWidth: '100px', width: '43.9%',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateMoney, trigger: 'blur'}
      ]
    },
    {
      label: '裙楼', key: 'qljggkb', value: '', type: 'text', labelWidth: '100px', width: '43.927%',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateMoney, trigger: 'blur'}
      ]
    },
    {label: '防震缝设置', key: 'fzfsz', value: '', type: 'text', col: 24},
    {label: '建筑平面规则性', key: 'jzpmgzx', value: '', type: 'text', col: 24},
    {label: '建筑竖向规则性', key: 'jzsxgzx', value: '', type: 'text', col: 24},
    {value: '结构类型', type: 'span', class: 'box-style', width: '12.25%', lineHeight: '35px'},
    {label: '主楼', key: 'zljglx', value: '', type: 'text', labelWidth: '100px', width: '43.9%'},
    {label: '裙楼', key: 'qljglx', value: '', type: 'text', labelWidth: '100px', width: '43.927%'},
    {value: '纵横向抗震墙间距', type: 'span', class: 'box-style', width: '12.25%', lineHeight: '35px'},
    {label: '主楼', key: 'zlzhxkzqjj', value: '', type: 'text', labelWidth: '100px', width: '43.9%'},
    {label: '裙楼', key: 'qlzhxkzqjj', value: '', type: 'text', labelWidth: '100px', width: '43.927%'},
    {label: '楼盖整体性（结构形式、尺寸）', key: 'lgztx', value: '', type: 'text', col: 24},
    {value: '抗震等级', type: 'span', class: 'box-style', width: '12.25%', lineHeight: '35px'},
    {
      label: '主楼', key: 'zlkzdj', value: '', type: 'text', labelWidth: '100px', width: '43.9%',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateMoney, trigger: 'blur'}
      ]
    },
    {
      label: '裙楼', key: 'qlkzdj', value: '', type: 'text', labelWidth: '100px', width: '43.927%',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateMoney, trigger: 'blur'}
      ]
    }
  ],
  '结构分析主要结果计算软件(主楼)': [
    {value: '计算软件(主楼)', type: 'span', class: 'box-style', width: '40%'},
    {key: 'rjName', value: '', type: 'input', class: 'box-style', width: '30%'},
    {
      key: 'rjName2',
      value: '',
      type: 'input',
      class: 'box-style',
      width: '30.2%'

    },
    {value: '楼层计算假定', type: 'span', class: 'box-style', width: '40%'},
    {
      key: 'lcjsjd',
      value: '',
      type: 'input',
      col: 6,
      class: 'box-style',
      width: '30%'

    },
    {
      key: 'lcjsjd2',
      value: '',
      type: 'input',
      col: 8,
      class: 'box-style',
      width: '30.2%'

    },
    {
      value: '周期调整系数', type: 'span', class: 'box-style', width: '40%',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateMoney, trigger: 'blur'}
      ]
    },
    {key: 'zqtzxs', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zqtzxs2', value: '', type: 'input', class: 'box-style', width: '30.2%'},
    {value: '风荷载', type: 'span', class: 'box-style', width: '20.05%', lineHeight: '77px'},
    {value: '总剪风力(kN)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'fhzZjl', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'fhzZjl2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '最大层间位移角', type: 'span', class: 'box-style', width: '20%'},
    {key: 'fhzZdcjwyj', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'fhzZdcjwyj2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '地震作用', type: 'span', class: 'box-style', width: '20.05%', lineHeight: '253px'},
    {value: '结构总质量(T)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'jgzzl', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'jgzzl2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '地震剪力(kN)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'dzjl', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'dzjl2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '墙倾覆弯距百分比', type: 'span', class: 'box-style', width: '20%'},
    {key: 'qqfwjbfb', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'qqfwjbfb2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '剪重比', type: 'span', class: 'box-style', width: '20%'},
    {key: 'jzb', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'jzb2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '最大层间位移角', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zdcjwyj', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zdcjwyj2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '弹性扭转位移比', type: 'span', class: 'box-style', width: '20%'},
    {key: 'txnzwyb', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'txnzwyb2', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '周期', type: 'span', class: 'box-style', width: '20.05%', lineHeight: '121px'},
    {value: 'T1(S)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zq1', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zq12', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: 'T2(S)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zq2', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zq22', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: 'T3(S)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zq3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zq32', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '墙、柱最大轴压比', type: 'span', class: 'box-style', width: '40%', lineHeight: '35px'},
    {label: '柱', key: 'zzdzyb', value: '', type: 'text', labelWidth: '50px', width: '14.9%'},
    {label: '墙', key: 'qzdzyb', value: '', type: 'text', labelWidth: '50px', width: '15%'},
    {label: '柱', key: 'zzdzyb2', value: '', type: 'text', labelWidth: '50px', width: '15.15%'},
    {label: '墙', key: 'qzdzyb2', value: '', type: 'text', labelWidth: '50px', width: '15%'},
    {value: '框架层上下刚比', type: 'span', class: 'box-style', width: '40%'},
    {key: 'kjcsxgdb', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'kjcsxgdb2', value: '', type: 'input', class: 'box-style', width: '30.2%'},
    {value: '时程波', type: 'span', class: 'box-style', width: '40%'},
    {key: 'scb', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'scb2', value: '', type: 'input', class: 'box-style', width: '30.2%'},
    {value: '时程波分析结果与振型分解反应语法的比较', type: 'span', class: 'box-style', width: '40%'},
    {key: 'scbfxjg', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'scbfxjg2', value: '', type: 'input', class: 'box-style', width: '30.2%'}
  ],
  '结构分析主要结果计算软件(裙楼)': [
    {value: '计算软件(裙楼)', type: 'span', class: 'box-style', width: '40%'},
    {key: 'rjName', value: '', type: 'input', class: 'box-style', width: '30%'},
    {
      key: 'rjName2',
      value: '',
      type: 'input',
      class: 'box-style',
      width: '30.2%'

    },
    {value: '楼层计算假定', type: 'span', class: 'box-style', width: '40%'},
    {
      key: 'lcjsjd3',
      value: '',
      type: 'input',
      col: 6,
      class: 'box-style',
      width: '30%'

    },
    {
      key: 'lcjsjd4',
      value: '',
      type: 'input',
      col: 8,
      class: 'box-style',
      width: '30.2%'

    },
    {
      value: '周期调整系数', type: 'span', class: 'box-style', width: '40%',
      rules: [
        {required: false, message: '', trigger: 'blur'},
        {validator: ElValid.validateMoney, trigger: 'blur'}
      ]
    },
    {key: 'zqtzxs3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zqtzxs4', value: '', type: 'input', class: 'box-style', width: '30.2%'},
    {value: '风荷载', type: 'span', class: 'box-style', width: '20.05%', lineHeight: '77px'},
    {value: '总剪风力(kN)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'fhzZjl3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'fhzZjl4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '最大层间位移角', type: 'span', class: 'box-style', width: '20%'},
    {key: 'fhzZdcjwyj3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'fhzZdcjwyj4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '地震作用', type: 'span', class: 'box-style', width: '20.05%', lineHeight: '253px'},
    {value: '结构总质量(T)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'jgzzl3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'jgzzl4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '地震剪力(kN)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'dzjl3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'dzjl4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '墙倾覆弯距百分比', type: 'span', class: 'box-style', width: '20%'},
    {key: 'qqfwjbfb3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'qqfwjbfb4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '剪重比', type: 'span', class: 'box-style', width: '20%'},
    {key: 'jzb3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'jzb4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '最大层间位移角', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zdcjwyj3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zdcjwyj4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '弹性扭转位移比', type: 'span', class: 'box-style', width: '20%'},
    {key: 'txnzwyb3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'txnzwyb4', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '周期', type: 'span', class: 'box-style', width: '20.05%', lineHeight: '121px'},
    {value: 'T1(S)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zq13', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zq14', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: 'T2(S)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zq23', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zq24', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: 'T3(S)', type: 'span', class: 'box-style', width: '20%'},
    {key: 'zq33', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'zq34', value: '', type: 'input', class: 'box-style', width: '30.25%'},
    {value: '墙、柱最大轴压比', type: 'span', class: 'box-style', width: '40%', lineHeight: '35px'},
    {label: '柱', key: 'zzdzyb3', value: '', type: 'text', labelWidth: '50px', width: '14.9%'},
    {label: '墙', key: 'qzdzyb3', value: '', type: 'text', labelWidth: '50px', width: '15%'},
    {label: '柱', key: 'zzdzyb4', value: '', type: 'text', labelWidth: '50px', width: '15.15%'},
    {label: '墙', key: 'qzdzyb4', value: '', type: 'text', labelWidth: '50px', width: '15%'},
    {value: '框架层上下刚比', type: 'span', class: 'box-style', width: '40%'},
    {key: 'kjcsxgdb3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'kjcsxgdb4', value: '', type: 'input', class: 'box-style', width: '30.2%'},
    {value: '时程波', type: 'span', class: 'box-style', width: '40%'},
    {key: 'scb3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'scb4', value: '', type: 'input', class: 'box-style', width: '30.2%'},
    {value: '时程波分析结果与振型分解反应语法的比较', type: 'span', class: 'box-style', width: '40%'},
    {key: 'scbfxjg3', value: '', type: 'input', class: 'box-style', width: '30%'},
    {key: 'scbfxjg4', value: '', type: 'input', class: 'box-style', width: '30.2%'}
  ],
  '基本抗震构造': [
    {value: '型钢强度', type: 'span', class: 'box-style', width: '20.07%', lineHeight: '35px'},
    {label: '最高', key: 'zgxgqd', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '最低', key: 'zdxgqd', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {value: '混凝土材料强度', type: 'span', class: 'box-style', width: '20.07%', lineHeight: '35px'},
    {label: '最高', key: 'zghltclqd', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '最低', key: 'zdhltclqd', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {value: '钢筋材料强度', type: 'span', class: 'box-style', width: '20.07%', lineHeight: '35px'},
    {label: '最高', key: 'zggjclqd', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '最低', key: 'zdgjclqd', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '楼盖类型', key: 'lgType', value: '', type: 'text', labelWidth: '254px', col: 24},
    {value: '关键部位梁截面及配筋', type: 'span', class: 'box-style', width: '20.07%', lineHeight: '81px'},
    {label: '主楼', key: 'zlgjbwljmjpj1', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '裙楼', key: 'qlgjbwljmjpj1', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '主楼', key: 'zlgjbwljmjpj2', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '裙楼', key: 'qlgjbwljmjpj2', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {value: '关键部位柱截面及配筋', type: 'span', class: 'box-style', width: '20.07%', lineHeight: '81px'},
    {label: '主楼', key: 'zlgjbwzjmjpj1', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '裙楼', key: 'qlgjbwzjmjpj1', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '主楼', key: 'zlgjbwzjmjpj2', value: '', type: 'text', labelWidth: '100px', width: '40%'},
    {label: '裙楼', key: 'qlgjbwzjmjpj2', value: '', type: 'text', labelWidth: '100px', width: '40%'}
  ],
  '超限高层建筑工程设计的可行性及主要抗震措施': [
    {
      label: '超限时类型和程度',
      key: 'cxdlxhqd',
      value: '',
      type: 'text',
      col: 24,

      labelWidth: '518px'
    },
    {
      key: 'yxkzaqdjscs',
      label: '有效控制安全的技术措施',
      value: '',
      type: 'textarea',
      labelWidth: '518px',
      maxlength: 500,
      class: 'line-box',
      col: 24,
      autosize: {minRows: 6, maxRows: 10}
    }
  ],
  '超限高层建筑工程超限情况': [
    {
      label: '基本结构体系',
      key: 'jbjgtxDictValue',
      value: [],
      type: 'checkbox',
      col: 24,
      labelWidth: '518px',
      class: 'line-box1',
      dataList: ['框架', '剪力墙', '框剪', '核心筒-外框', '筒中筒', '局部框支墙', '较多短肢墙', '混凝土内筒-钢外框',
        '混凝土内筒-型钢混凝土外框', '巨型', '错层结构', '混凝土内筒-钢外筒', '混凝土内筒-型钢混凝土外筒', '钢框架',
        '钢中心支撑框架', '钢偏心支撑框架', '钢筒体', '大跨屋盖', '其他']
    },
    {value: '超高情况', type: 'span', class: 'box-style', width: '40%', lineHeight: '35px'},
    {label: '规范适用高度', key: 'cgqkGfsygd', value: '', type: 'text', labelWidth: '100px', width: '30.05%'},
    {label: '工程结构高度', key: 'cgqkBgcjggd', value: '', type: 'text', labelWidth: '100px', width: '30%'},
    {
      label: '平面不规则', key: 'pmbgzDictValue', value: [], type: 'checkbox', col: 24, labelWidth: '518px',
      dataList: ['扭转不规则', '偏心布置', '凹凸不规则', '组合平面', '楼板开大洞', '错层']
    },
    {
      label: '竖向不规则', key: 'sxbgzDictValue', value: [], type: 'checkbox', col: 24, labelWidth: '518px',
      dataList: ['刚度突变', '立面突变', '多塔', '构件间断', '加强层', '连体', '承载力突变']
    },
    {
      label: '局部不规则', key: 'jbbgzDictValue', value: [], type: 'checkbox', col: 24, labelWidth: '518px',
      dataList: ['穿层墙柱', '斜柱', '夹层', '层高突变', '个别错层', '个别转换', '其他']
    },
    {
      label: '显著不规则',
      key: 'xzbgzDictValue',
      value: [],
      type: 'checkbox',
      col: 24,
      labelWidth: '518px',
      class: 'line-box2',
      dataList: ['扭转比偏大', '抗扭刚度弱', '层刚度弱', '塔楼偏置', '墙高位转换', '厚板转换', '复杂连接', '多重复杂']
    },
    {value: '屋盖超限情况', type: 'span', class: 'box-style', width: '40%', lineHeight: '344px'},
    {
      label: '基本形式',
      key: 'cgcxqkDictValue',
      value: [],
      type: 'checkbox',
      width: '60.05%',
      labelWidth: '100px',
      class: 'line-box3',
      dataList: ['立体桁架', '平面桁架', '实腹式拱', '格构式拱', '网架', '双层网壳', '单层网壳', '整体张拉式膜结构',
        '混凝土薄壳', '单索', '索网', '索桁架', '轮幅式索结构']
    },
    {
      label: '一般组合',
      key: 'cgcxqkDictValue1',
      value: [],
      type: 'checkbox',
      width: '60.05%',
      labelWidth: '100px',
      class: 'line-box2',
      dataList: ['张弦拱架', '张弦桁架', '弦支穹顶', '索穹顶', '斜拉网架', '斜拉网壳', '斜拉桁架', '组合网架', '其他一般组合']
    },
    {
      label: '非常用组合', key: 'cgcxqkDictValue2', value: [], type: 'checkbox', width: '60.05%', labelWidth: '100px',
      dataList: ['多重组合', '杂交组合', '开启屋盖', '其他']
    },
    {
      label: '尺度', key: 'cgcxqkDictValue3', value: [], type: 'checkbox', width: '60.05%', labelWidth: '100px',
      dataList: ['跨度超限', '悬挑超限', '总长度超限', '一般']
    },
    {
      label: '超限归类', key: 'cxgl', value: [], type: 'checkbox', col: 24, labelWidth: '518px', class: 'line-box2',
      dataList: ['高度大于350m', '高度大于200m', '混凝土结构B级高度', '超规范高度', '未超高但多项不规则',
        '超高且不规则', '其他', '屋盖形式复杂', '屋盖跨度超限', '屋盖悬挑超限', '屋盖总长度超限']
    },
    {
      label: '综合描述',
      key: 'zhms',
      value: '',
      type: 'textarea',
      labelWidth: '518px',
      maxlength: 200,
      class: 'line-box4',
      col: 24,
      autosize: {minRows: 4, maxRows: 8}
    }
  ]
}

export {GiantList}


