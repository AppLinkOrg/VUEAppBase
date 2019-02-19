import http from '@/config/http'

/**
 * 用户登录
 */
export const sendLogin = params => http.post('api/member/login', params)

/**
 * 获取短信验证码
 */
export const sendloginverifycode = phone => http.post('api/member/sendloginverifycode', phone)

/**
 * 发送密码重置的短信验证码
 */
export const sendpwdresetverifycode = () => http.get('api/member/sendpwdresetverifycode')

/**
 * 利用短信验证码重置密码，无需旧密码
 */
export const resetpassword = params => http.post('api/member/resetpassword', params)

/**
 * 发送授权登录绑定手机号码的验证码
 */
export const sendbindverifycode = (phone) => http.post('api/member/sendbindverifycode', phone)

/**
 * 换手机号码
 */
export const changemobile = (params) => http.post('api/member/changemobile', params)


/**
 * 获取手机号码
 */
export const getMobile = () => http.get('api/member/getmobile')

/**
 * 检查手机号码是否已经被注册
 */
export const mobileisuse = (params) => http.post('api/member/mobileisuse', params)

/**
 * 用户提交注册，返回登录状态的token，并记录session。支持两种登录方式。
 */
export const register = (params) => http.post('api/member/register', params)

/**
 * 获取用户的账户资料
 */
export const getUser = params => http.post('api/member/info', params)

/**
 * 更新用户账号资料，基本资料为主
 */
export const infoupdate = params => http.post('api/member/infoupdate', params)

/**
 * 随机获取用户图像
 */
export const photoRandom = () => http.get('api/memberphotostore/random')

/**
 * 获取已购课程
 */
export const mycourse = () => http.get('api/member/mycourse')

/**
 * 记录课程足迹
 */
export const courseplay = (params) => http.post('api/member/courseplay', params)

/**
 * 获取课程足迹
 */
export const coursetrack = () => http.get('api/course/coursetrack')

/**
 * 获取已购测评
 */
export const getMyEvaluating = () => http.get('api/member/myevaluating')

/**
 * 获取评测记录
 */
export const lisevaluatingresult = () => http.get('api/member/lisevaluatingresult')





/**
 * 获取活动列表
 */
export const getActivityList = (parmas) => http.get('api/activity/list', parmas)

/**
 * 获取活动详情数据
 */
export const getActivityDetail = (id) => http.get('api/activity/detail?id=' + id)

/**
 * 获取ebaby分类列表
 */
export const getBabyTagList = () => http.get('api/baby/taglist')

/**
 * 获取ebaby辅助器材列表
 */
export const getBabyMaterialList = (id) => http.get('api/baby/materiallist?cate_id=' + id)

/**
 * 获取ebaby课程列表
 */
export const getBabyCourseList = () => http.get('api/baby/courselist')

/**
 * 获取ebaby课程详情
 */
export const getBabyCourseDetail = (id) => http.get('api/baby/coursedetail?id=' + id)

/**
 * 获取ebaby课程详情
 */
export const getBabyMaterialDetail = (id) => http.get('api/baby/materialdetail?id=' + id)


/**
 * 获取home轮播图
 */
export const getMamaBannerList = () => http.get('api/mamabanner/list')

/**
 * 获取home专家
 */
export const getProfessorList = (params) => http.get('api/professor/list?orderby=' + params)

/**
 * 获取home课程
 */
export const getAllCourseList = (params) => http.get('api/course/list?orderby=' + params)


/**
 * 获取home文章
 */
export const getArticleList = (params) => http.get('api/articles/list?orderby=' + params)

/**
 * 获取文章分类
 */

export const getArticleCategory = () => http.get('api/articles/classlist')

/**
 * 获取文章分类列表
 */

export const getArticlesList = (params) => http.get('api/articles/list', params)


/**
 * 获取文章详情数据
 */
export const getArticleDetail = (id) => http.get('api/articles/detail?id=' + id)


/**
 * 获取专家列表
 */
export const getExpertList = (params) => http.get('api/experts/list?orderby=' + params)

/**
 * 获取专家的基本信息
 */
export const getExpertDetail = (id) => http.get('api/experts/detail?id=' + id)

/**
 * 获取专家的课程列表
 */
export const getExpertsCourse = (id) => http.get('api/course/list?expert_id=' + id)



/**
 * 获取全部视频分类
 */
export const getVideoCategory = () => http.get('api/videos/classlist')

/**
 * 获取精品视频分类所有列表
 */
export const getVideoList = (params) => http.get('api/videos/list', params)

/**
 * 获取精品视频指定分类列表
 */
export const getVideoAllList = () => http.get('api/videos/list')

/**
 * 获取精品视频详情
 */
export const getVideoDetails = (id) => http.get('api/videos/detail?id=' + id)

/**
 * 获取课程大分类列表
 */
export const getCourseCateList = () => http.get('api/course/catelist')

/**
 * 获取课程小分类列表
 */
export const getCourseCategoryList = (id) => http.get('api/course/categorylist?cate_id=' + id)


/**
 * 获取课程列表
 */
export const getCourseList = (params) => http.get('api/course/list', params)

/**
 * 获取课程详情
 */
export const getCourseDetail = (id) => http.get('api/course/detail?id=' + id)



/**
 * 获取评论列表
 */
export const getCommentList = (parmas) => http.get('api/comment/list', parmas)

/**
 * 提交评论
 */
export const getSubmintComment = parmas => http.post('api/comment/submit', parmas)

/**
 * 评测轮播图
 */
export const getEvaluationSlideList = () => http.get('api/evaluating/slidelist')

/**
 * 评测题目列表
 */
export const getEvaluationCategoryList = () => http.get('api/evaluatingcategory/list')

/**
 * 评测题目列表
 */
export const getEvaluationCategoryDetail = (id) => http.get('api/evaluating/list?class_id=' + id)

/**
 * 评测问题数据
 */
export const getEvaluationQuestion = (id) => http.get('api/evaluating/question?evaluating_id=' + id)

/**
 * 评测问题结果
 */
export const getEvaluationCalc = parmas => http.post('api/evaluating/calc', parmas)





/**
 * 新添宝宝信息
 */
export const babyflie = params => http.post('api/baby/babyflie', params)

/**
 * 新添宝宝成长信息
 */
export const babygrow = params => http.post('api/babygrow/grow', params)

/**
 * 新添宝宝成长信息列表
 */
export const babygrowlist = params => http.post('api/babygrow/growlist', params)


/**
 * 获取宝宝信息列表
 */
export const getbabyinfolist = parmas => http.post('api/baby/babyinfolist', parmas)

/**
 * 获取宝宝信息详情
 */
export const getbabyinfodetail = parmas => http.post('api/baby/babyinfodetail', parmas)



export const test = parmas => http.post('api/test/testmemberid', parmas)







/**
 * 测评分类标签
 */
export const testTag = () => http.get('api/testtag/list')

/**
 * 测评列表
 */
export const testList = (parmas) => http.get('api/test/list', parmas)

/**
 * 评测详情
 */
export const testDetail = (id) => http.get('api/test/detail?id=' + id)


/**
 * 评测问题
 */
export const testQues = (id) => http.get('api/test/queslist?ques_id=' + id)


/**
 * 评测结果
 */
export const testCalc = (parmas) => http.get('api/test/calc', parmas)

/**
 * 文章搜索
 */
export const searchArticle = (parmas) => http.get('api/articles/search', parmas)

/**
 * 课程搜索
 */
export const searchCourse = (parmas) => http.get('api/course/search', parmas)




/**
 * 视频搜索
 */
export const searchVideos = (parmas) => http.get('api/videos/search', parmas)



/**
 * 专家搜索
 */
export const searchExperts = (parmas) => http.get('api/experts/search', parmas)

/**
 * 会员签到
 */
export const signin = (parmas) => http.get('api/member/signin', parmas)

/**
 * 获取会员签到记录
 */
export const signinrecord = (parmas) => http.get('api/member/signinrecord', parmas)