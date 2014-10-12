package consuntivazione.cap.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import consuntivazione.cap.service.TimeSheetService;
import consuntivazione.cap.vo.ReportEntryVO;

@Controller
public class TheController {

	@Autowired
	private TimeSheetService timeSheetService;

//	@RequestMapping(value = "/report")
//	@ResponseBody
//	public List<ReportEntryVO> getReportEntries(
//			@RequestParam("workerId") int workerId,
//			@RequestParam("month") int month, @RequestParam("year") int year) {
//		try {
//			return timeSheetService.report(workerId, month, year);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return null;
//	}

	@RequestMapping("/")
	public String helloWorld(Model model) {
		model.addAttribute("message", "Hello World!");
		return "helloWorld";
	}

}
