package consuntivazione.cap.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import consuntivazione.cap.service.TimeSheetService;
import consuntivazione.cap.vo.ReportEntryVO;

@Controller
public class TheController {
	//feature1

	@Autowired
	private TimeSheetService timeSheetService;
	
	@RequestMapping(value = "/report")
	public @ResponseBody List<ReportEntryVO> getReportEntries(
			@RequestParam("workerId") int workerId,
			@RequestParam("month") int month, 
			@RequestParam("year") int year) {
		try {
			List<ReportEntryVO> entries = timeSheetService.report(workerId, month, year);
			return entries;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/close")
	public void closeCtx() throws Exception{
		timeSheetService.closeCtx();
	}


}
